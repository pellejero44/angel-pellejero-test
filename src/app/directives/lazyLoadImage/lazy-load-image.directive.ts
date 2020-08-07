import { Directive, ElementRef, Renderer2, Input, OnInit, OnDestroy } from '@angular/core';

@Directive({
  selector: '[ldImages]'
})
export class LazyLoadImagesDirective implements OnInit, OnDestroy{

  @Input('ldImages') intersectionObserverConfig: Object;

  private intersectionObserver: IntersectionObserver;
  private rootElement: HTMLElement;

  constructor(element: ElementRef,public renderer: Renderer2) {
      this.rootElement = element.nativeElement;
    }

  ngOnInit() {
    this.init()
  }
  
  ngOnDestroy() {
    if (this.intersectionObserver) {
      this.intersectionObserver.disconnect();
    }
  }

  private init():void {
    this.registerIntersectionObserver();
    
    this.observeDOMChanges(this.rootElement, () => {
      const imagesFoundInDOM = this.getAllImagesToLazyLoad(this.rootElement);
      imagesFoundInDOM.forEach((image: HTMLElement) => this.intersectionObserver.observe(image));
    });
  }
  
  private registerIntersectionObserver(): IntersectionObserver {
    this.intersectionObserver = new IntersectionObserver(
      images => images.forEach(image => this.onIntersectionChange(image)),
      this.intersectionObserverConfig instanceof Object ? this.intersectionObserverConfig : undefined
    );

    return this.intersectionObserver;
  }

  private observeDOMChanges(rootElement: HTMLElement, onChange: Function): MutationObserver {
    const observer = new MutationObserver(mutations => onChange(mutations));

    const observerConfig = {
      attributes: true,
      characterData: true,
      childList: true,
      subtree: true
    };

    observer.observe(rootElement, observerConfig);

    onChange();

    return observer;
  }

  private getAllImagesToLazyLoad(pageNode: HTMLElement) {
    return Array.from(pageNode.querySelectorAll('img[data-src]'));
  }

  private onIntersectionChange(image: any) {
    if (!image.isIntersecting) {
      return;
    }

    this.onImageAppearsInViewport(image.target);
  }

  private onImageAppearsInViewport(image: any) {
    if (image.dataset.src) {
      this.renderer.setAttribute(image, 'src', image.dataset.src);
      this.renderer.listen(image, 'error', (event) => {
          this.renderer.setAttribute(image, 'src', '/assets/images/notFound.jpg');
      });
      this.renderer.removeAttribute(image, 'data-src');
    }

    if (this.intersectionObserver) {
      this.intersectionObserver.unobserve(image);
    }
  }

}