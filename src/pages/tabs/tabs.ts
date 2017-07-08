import { Component } from '@angular/core';

import { QuizPage } from '../quiz/quiz';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = QuizPage;
  tab3Root = ContactPage;

  constructor() {

  }
}
