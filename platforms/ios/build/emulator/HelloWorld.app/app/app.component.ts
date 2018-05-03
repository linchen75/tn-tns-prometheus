import { Component, ViewChild, ElementRef } from "@angular/core";

@Component({
  selector: "my-app",
  template: `
  <ScrollView orientation="horizontal" ios.pagingEnabled="true" left="0" top="0" width="100%" height="100%">
  <StackLayout>
    <TextView text="Steps 1: Key Information"></TextView>
    <FlexboxLayout>  
      <Label text="Account DID"></Label><Label class="must" text="*"></Label>
    </FlexboxLayout>
    <FlexboxLayout class="fullWidth">
      <TextField id="accountDid" class="textbox"></TextField>
      <Button text="Look up" class="btn btn-primary btn-active" (tap)="submit()"></Button>
    </FlexboxLayout>

    <TextField type="file" #upload text="test" (tap)="uploadFile()" ></TextField>
    <Button row="3" margin="2" text="Upload!" tap="uploadFile()" ></Button>

    <FlexboxLayout>  
      <Label text="Template"></Label><Label class="must" text="*"></Label>
    </FlexboxLayout>
    <TextField id="template"></TextField>
    

    <FlexboxLayout>  
      <Label text="TSE Name"></Label><Label class="must" text="*"></Label>
    </FlexboxLayout>
    <TextField id="tseName"></TextField>

    <FlexboxLayout>  
      <Label text="TalentNetwork URL"></Label><Label class="must" text="*"></Label>
    </FlexboxLayout>
    <TextField id="talentNetworkUrl"></TextField>

    <FlexboxLayout>  
      <Label text="Default Language"></Label><Label class="must" text="*"></Label>
    </FlexboxLayout>
    <TextField></TextField>

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
  @ViewChild('upload') upload: ElementRef;
  submit() {
    console.log('hello');
  }

  public readFile(input) {
        if (input.files && input.files[0]) {
          const tempFile = input.files[0];
    //       if (!this.uploadFileValidation(tempFile)) {
    //         return false;
    //       }
          let reader: any;
          reader = new FileReader();
          reader.onload = (e) => {
            const img = new Image;
            img.onload = () => {
              if (img.width < 400 && img.height < 400) {
                alert('The image resolution is too low.');
                return false;
              }
    //           this.generateMediaItem(img, tempFile);
            };
            img.src = e.target.result;
          };
          reader.readAsDataURL(input.files[0]);
        }
      }
    
      public uploadFile() {
        this.readFile(this.upload.nativeElement);
        console.log("1111" + this.upload.nativeElement);
      }
}
