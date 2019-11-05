import { Component, OnInit, ViewChild, ElementRef, Inject, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs/internal/Subject';
import { PartyFormComponent } from '../../../declaration-wide-controls/party-form/party-form.component';
import { filter } from 'rxjs/internal/operators/filter';
import { takeUntil } from 'rxjs/internal/operators/takeUntil';
import { DisplayDensityToken, IgxExpansionPanelComponent, IgxOverlayService, ConnectedPositioningStrategy } from 'igniteui-angular';

@Component({
  providers: [{ provide: DisplayDensityToken, useValue: { displayDensity: 'compact' } }],
  selector: 'app-expanding',
  templateUrl: './expanding.component.html',
  styleUrls: ['./expanding.component.scss']
})
export class ExpandingComponent implements OnInit, OnDestroy {
  private destroy$ = new Subject<boolean>();
  private overlayId: string;
  private cardHidden = true;

  @ViewChild(IgxExpansionPanelComponent, { read: IgxExpansionPanelComponent, static: true })
  public panel: IgxExpansionPanelComponent;
  public expansionPanelDecription = 'Expand to display all related CDS Declaration header controls.';

  @ViewChild('buttonElement', { static: true })
  private buttonElement: ElementRef;

  constructor( @Inject(IgxOverlayService) public overlayService: IgxOverlayService) {
//  overlay service deletes the id when onClosed is called. We should clear our id
        //  also in same event
        this.overlayService
            .onClosed
            .pipe(
                filter((x) => x.id === this.overlayId),
                takeUntil(this.destroy$))
            .subscribe(() => delete this.overlayId);
  }

  ngOnInit() {
  }

  public handleExpansion(evt?: { event: Event }) {
    console.log('Expanded event thrown ', (evt ? 'with event: ' + evt.event : 'with no event'));
    this.expansionPanelDecription = 'Colapse to hide all related CDS Declaration header controls.';

  }

  public handleCollapse(evt?: { event: Event }) {
    console.log('Collapsed event thrown ', (evt ? 'with event: ' + evt.event : 'with no event'));
    this.expansionPanelDecription = 'Expand to display all related CDS Declaration header controls.';
  }

  public toggleOverlay() {
    if (this.cardHidden) {
        if (!this.overlayId) {
            const positionStrategy = new ConnectedPositioningStrategy({
                target: this.buttonElement.nativeElement
            });
            this.overlayId = this.overlayService.attach(PartyFormComponent, {
                positionStrategy,
                modal: false,
                closeOnOutsideClick: false
            });
        }
        this.overlayService.show(this.overlayId);
    } else {
        this.overlayService.hide(this.overlayId);
    }
    this.cardHidden = !this.cardHidden;
}

public ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
}

}
