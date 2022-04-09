import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { GustavoComponent } from './gustavo/gustavo.component';
import { RouterModule } from '@angular/router';
import { GustavoListaComponentComponent } from './gustavo-lista-component/gustavo-lista-component.component';
import { GustavoDisciplinasServiceService } from './gustavo-disciplinas-service.service';
import { GustavoDetalhesComponentComponent } from './gustavo-detalhes-component/gustavo-detalhes-component.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: GustavoComponent },
      { path: 'disciplinas', component: GustavoListaComponentComponent },
      {
        path: 'detalhes/:index',
        component: GustavoDetalhesComponentComponent,
      },
    ]),
  ],
  declarations: [
    AppComponent,
    HelloComponent,
    GustavoComponent,
    GustavoListaComponentComponent,
    GustavoDetalhesComponentComponent,
  ],
  bootstrap: [AppComponent],
  providers: [GustavoDisciplinasServiceService],
})
export class AppModule {}
