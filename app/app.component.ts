import { Component } from "@angular/core";

@Component({
  selector: "my-app",
  template: `
  <ScrollView orientation="horizontal" ios.pagingEnabled="true" left="0" top="0" width="100%" height="100%">
  <StackLayout>
    <TextField hint="Account DID *"></TextField>
    <TextField hint="Template *"></TextField>
    <TextField hint="TSE Name *"></TextField>
    <TextField hint="TalentNetwork URL *"></TextField>
    <TextField hint="Default Language *"></TextField>

    <TextField hint="Account DID *"></TextField>
    <TextField hint="Template *"></TextField>
    <TextField hint="TSE Name *"></TextField>
    <TextField hint="TalentNetwork URL *"></TextField>
    <TextField hint="Default Language *"></TextField>

    <TextField hint="Account DID *"></TextField>
    <TextField hint="Template *"></TextField>
    <TextField hint="TSE Name *"></TextField>
    <TextField hint="TalentNetwork URL *"></TextField>
    <TextField hint="Default Language *"></TextField>

    <TextField hint="Account DID *"></TextField>
    <TextField hint="Template *"></TextField>
    <TextField hint="TSE Name *"></TextField>
    <TextField hint="TalentNetwork URL *"></TextField>
    <TextField hint="Default Language *"></TextField>

  </StackLayout>
  </ScrollView>
  `
})
export class AppComponent {
  // Your TypeScript logic goes here
  colors = ['red', 'yellow', 'blue'];
  selectedColorIndex = 0;
}
