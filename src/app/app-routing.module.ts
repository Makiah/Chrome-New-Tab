import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  // { path: "", redirectTo: "/home", pathMatch: "full" },
  // { path: "smart-launch", component: SMARTLaunchComponent },
  // { path: "token-reception", component: SMARTTokenReceptionComponent },
  // { path: "app", component: VariantEntryAndVisualizationComponent },
  // { path: "ehr-link", component: EHRInstructionsComponent },
  // { path: "home", component: LandingPageComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}
