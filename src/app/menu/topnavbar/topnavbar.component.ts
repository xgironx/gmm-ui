import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-topnavbar',
  templateUrl: './topnavbar.component.html',
  styleUrls: ['./topnavbar.component.css']
})

export class TopnavbarComponent {
    // TypeScript public modifier
    constructor() {

    }

    toggleClicked(event: MouseEvent)
    {
        console.log('hello `topnavbar` component');
        var target = event.srcElement.id;
        var body = $('body');
        var menu = $('#sidebar-menu');
        
        // toggle small or large menu
        if (body.hasClass('nav-md')) {
            menu.find('li.active ul').hide();
            menu.find('li.active').addClass('active-sm').removeClass('active');
        } else {
            menu.find('li.active-sm ul').show();
            menu.find('li.active-sm').addClass('active').removeClass('active-sm');
        }
        body.toggleClass('nav-md nav-sm');

    }
  

  ngOnInit() {
    console.log('hello `topnavbar` component');
  }

  ngAfterViewInit(){
     
  }
 
}
