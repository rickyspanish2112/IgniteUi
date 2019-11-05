import { Component, OnInit, Input, ElementRef, ViewChild, Inject, OnDestroy } from '@angular/core';
import { DisplayDensityToken, IgxOverlayService, ConnectedPositioningStrategy } from 'igniteui-angular';
import { Subject } from 'rxjs/internal/Subject';
import { filter } from 'rxjs/internal/operators/filter';
import { takeUntil } from 'rxjs/internal/operators/takeUntil';
import { PartyFormComponent } from '../../party-form/party-form.component';

@Component({
  providers: [{ provide: DisplayDensityToken, useValue: { displayDensity: 'compact' } }],
  selector: 'app-party-control',
  templateUrl: './party-control.component.html',
  styleUrls: ['./party-control.component.scss']
})
export class PartyControlComponent implements OnInit, OnDestroy {
  private destroy$ = new Subject<boolean>();
  private overlayId: string;
  private cardHidden = true;

  @ViewChild('buttonElement', { static: true })
  private buttonElement: ElementRef;

 public currentImporterShortCode = 'Apple (UK) Ltd';
 public currentExporterShortCode = 'Microsoft';
 public currentDeclarantShortCode = 'ASM UK Ltd';

  constructor(@Inject(IgxOverlayService) public overlayService: IgxOverlayService) {
    //  overlay service deletes the id when onClosed is called. We should clear our id
        //  also in same event
        this.overlayService
            .onClosed
            .pipe(
                filter((x) => x.id === this.overlayId),
                takeUntil(this.destroy$))
            .subscribe(() => delete this.overlayId);
  }




  @Input()
  partyType: string;
  @Input()
  partyTypeDescription: string;
  @Input()
  shortCodeLabel: string;

  ngOnInit() {
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
