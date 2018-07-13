import { Component, OnInit } from '@angular/core';
import { Gallery, GalleryItem, ImageItem } from '@ngx-gallery/core';
import { Lightbox } from '@ngx-gallery/lightbox';
import { MatSnackBar } from 'node_modules/@angular/material';


@Component({
  selector: 'app-lazyload-image',
  templateUrl: './lazyload-image.component.html',
  styleUrls: ['./lazyload-image.component.css']
})
export class LazyloadImageComponent implements OnInit {
  defaultImage = 'assets/images/default.png';
  items: GalleryItem[];
  imageData = data;
  offset = 100;
  // screen_lg = '1200px';
  // screen_md = '992px';
  // image1 = 'https://images.unsplash.com/photo-1422004707501-e8dad229e17a?fm=jpg';
  // image2 = 'https://images.unsplash.com/photo-1439931444800-9bcc83f804a6?fm=jpg';
  // image3 = 'https://images.unsplash.com/photo-1417128281290-30a42da46277?fm=jpg';



  constructor(
    public gallery: Gallery,
    public lightbox: Lightbox,
    public snackbar: MatSnackBar
  ) { }

  ngOnInit() {
    // Load items into the gallery component
    this.items = this.imageData.map(item => {
      return new ImageItem({ src: item.srcUrl, thumb: item.previewUrl });
    });
    // Load items into the lightbox gallery ref
    this.gallery.ref('lightbox').load(this.items);
  }

  openSnackBar(message: string, ) {
    this.snackbar.open('Message archived', 'Undo', {
      duration: 3000,
    });;
  }

}

const data = [
  {
    srcUrl: 'https://preview.ibb.co/jrsA6R/img12.jpg',
    previewUrl: 'https://preview.ibb.co/jrsA6R/img12.jpg'
  },
  {
    srcUrl: 'https://preview.ibb.co/kPE1D6/clouds.jpg',
    previewUrl: 'https://preview.ibb.co/kPE1D6/clouds.jpg'
  },
  {
    srcUrl: 'https://preview.ibb.co/mwsA6R/img7.jpg',
    previewUrl: 'https://preview.ibb.co/mwsA6R/img7.jpg'
  },
  {
    srcUrl: 'https://images.unsplash.com/photo-1443890923422-7819ed4101c0?fm=jpg',
    previewUrl: 'https://images.unsplash.com/photo-1443890923422-7819ed4101c0?fm=jpg'
  },
  {
    srcUrl: 'https://images.unsplash.com/photo-1422004707501-e8dad229e17a?fm=jpg',
    previewUrl: 'https://images.unsplash.com/photo-1422004707501-e8dad229e17a?fm=jpg'
  },
  {
    srcUrl: 'https://images.unsplash.com/photo-1417128281290-30a42da46277?fm=jpg',
    previewUrl: 'https://images.unsplash.com/photo-1417128281290-30a42da46277?fm=jpg'
  },
  {
    srcUrl: 'https://images.unsplash.com/photo-1437818628339-19ded67ade8e?fm=jpg',
    previewUrl: 'https://images.unsplash.com/photo-1437818628339-19ded67ade8e?fm=jpg'
  }
];
