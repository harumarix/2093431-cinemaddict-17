import UserView from './view/user-view.js';
import FilterView from './view/filter-view.js';
import { render } from './render.js';
import BoardPresenter from './presenter/board-presenter.js';

const siteMainElement = document.querySelector('.main');
const boardPresenter = new BoardPresenter();

render(new UserView(), siteMainElement);
render(new FilterView(), siteMainElement);

boardPresenter.init(siteMainElement);   