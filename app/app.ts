

import {Component, ViewChild} from '@angular/core';
import {ionicBootstrap, Platform, MenuController, Nav} from 'ionic-angular';
import {StatusBar} from 'ionic-native';
import {HelloIonicPage} from './pages/hello-ionic/hello-ionic';
import {VegetablesPage} from './pages/vegetables/vegetables';
import {FruitsPage} from './pages/fruits/fruits';
import {AnimalsPage} from './pages/animals/animals';
import {FlowersPage} from './pages/flowers/flowers';
import {BirdsPage} from './pages/birds/birds';
import {TreesPage} from './pages/trees/trees';
import {HindiPage} from './pages/hindi/hindi';
import {EnglishPage} from './pages/english/english';
import {FlagsPage} from './pages/flags/flags';
import {ColorsPage} from './pages/colors/colors';


@Component({
  templateUrl: 'build/app.html'
})
class MyApp {
  @ViewChild(Nav) nav: Nav;

  // make HelloIonicPage the root (or first) page
  rootPage: any = HelloIonicPage;
  pages: Array<{title: string, component: any,icon:any}>;

  constructor(
    public platform: Platform,
    public menu: MenuController
  ) {
    this.initializeApp();

    // set our app's pages
    this.pages = [
      { title: 'Dashboard', component: HelloIonicPage,icon:"img/icons/dash.png"},
      { title: 'Hindi Alphabets', component: HindiPage,icon:"img/icons/hindi.png" },
      { title: 'English Alphabets', component: EnglishPage,icon:"img/icons/english.png" },
      { title: 'Vegetables', component: VegetablesPage,icon:"img/icons/vegetables.png" },
      { title: 'Fruits', component: FruitsPage,icon:"img/icons/fruits.png" },
      { title: 'Animals', component: AnimalsPage,icon:"img/icons/animals.png" },
      { title: 'Flowers', component: FlowersPage,icon:"img/icons/flowers.png" },
      { title: 'Birds', component: BirdsPage,icon:"img/icons/birds.png" },
      { title: 'Trees', component: TreesPage,icon:"img/icons/trees.png" },
      { title: 'Colors', component: ColorsPage,icon:"img/icons/colors.png" },
      { title: 'Country Flags', component: FlagsPage,icon:"img/icons/flags.png" }
    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      //this.hideSplashScreen();
    });
  }
 

  openPage(page) {
    // close the menu when clicking a link from the menu
    this.menu.close();
    // navigate to the new page if it is not the current page
    this.nav.setRoot(page.component);
  }
}

ionicBootstrap(MyApp);
