import {bootstrap}    from 'angular2/platform/browser';
import {AppComponent} from './app.component';
import {IndexComponent} from './index/index.component';

bootstrap(AppComponent)
    .catch((reason) => console.log(reason));
bootstrap(IndexComponent)
    .catch((reason) => console.log(reason));