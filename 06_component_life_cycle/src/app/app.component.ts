import { ChangeDetectionStrategy, Component, VERSION } from "@angular/core";

@Component({
  selector: "my-app",
  changeDetection:ChangeDetectionStrategy.Default,
  template: `
    <h1>Angular Life Cycle Hooks</h1>
    Reference :
    <a
      href="https://www.tektutorialshub.com/angular/angular-component-life-cycle-hooks/#create-the-hook-method"
      >Angular Life Cycle Hooks</a
    >

    <h1>Root Component</h1>


    <br />
    <input
      type="text"
      name="message"
      [(ngModel)]="message"
      autocomplete="off"
    />
    <br />
    <input
      type="text"
      name="content"
      [(ngModel)]="content"
      autocomplete="off"
    />


    <br />
    hide child :
    <input
      type="checkbox"
      name="hideChild"
      [(ngModel)]="hideChild"
      autocomplete="off"
    />

    <br />
    <br />
    <app-child [message]="message" *ngIf="!hideChild">
      <!-- Injected Content -->
      <b> {{ content }} </b>
    </app-child>

    
  `
})
export class AppComponent {
  name = "Angular " + VERSION.major;

  message = "Hello";
  content = "Hello";
  hideChild=false;

  constructor() {
    console.log("AppComponent:Contructed");
  }

  ngOnChanges() {
    console.log("AppComponent:ngOnChanges");
  }

  ngOnInit() {
    console.log("AppComponent:ngOnInit");
  }

  ngDoCheck() {
    console.log("AppComponent:DoCheck");
  }

  ngAfterContentInit() {
    console.log("AppComponent:ngAfterContentInit");
  }

  ngAfterContentChecked() {
    console.log("AppComponent:AfterContentChecked");
  }

  ngAfterViewInit() {
    console.log("AppComponent:AfterViewInit");
  }

  ngAfterViewChecked() {
    console.log("AppComponent:AfterViewChecked");
  }

  ngOnDestroy() {
    console.log("AppComponent:ngOnDestroy");
  }

}
