import { Injectable } from '@angular/core';
import * as _ from 'lodash';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  constructor() { }

  openImageInNewWindow(image64: string) {
    const b64toBlob = (b64Data: any, contentType = '', sliceSize = 512) => {
      const byteCharacters = atob(b64Data);
      const byteArrays = [];

      for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
        const slice = byteCharacters.slice(offset, offset + sliceSize);

        const byteNumbers = new Array(slice.length);
        for (let i = 0; i < slice.length; i++) {
          byteNumbers[i] = slice.charCodeAt(i);
        }

        const byteArray = new Uint8Array(byteNumbers);
        byteArrays.push(byteArray);
      }

      const blob = new Blob(byteArrays, { type: contentType });
      return blob;
    }
    const blob = b64toBlob(image64.split(',')[1], image64.split(',')[0].split(';')[0].split(':')[1]);
    const blobUrl = URL.createObjectURL(blob);

    //let url = window.URL.createObjectURL(blob);

    //window.location.href = this.sanitizer.bypassSecurityTrustUrl(blobUrl);
    window.open(blobUrl, '_blank');
  }

  ImageFileChangeEvent(fileInput: any): Promise<string> {
    var imageError: string;
    if (fileInput.target.files && fileInput.target.files[0]) {
      var fileContent = new FileReader();
      fileContent.readAsDataURL(fileInput.target.files[0]);

      return new Promise((resolve, reject) => {
        fileContent.onload = (e: any) => {
          const allowed_types = ['image/png', 'image/jpeg'];
          if (!_.includes(allowed_types, fileInput.target.files[0].type)) {
            imageError = 'Only Images are allowed ( JPG | PNG )';
            reject(imageError);
          }
          else {
            const image = new Image();
            image.src = e.target.result;
            image.onload = rs => {
              const img = e.target.result
              resolve(img);
            };
          }
        };
      });
    }
    return null;
  }
}
