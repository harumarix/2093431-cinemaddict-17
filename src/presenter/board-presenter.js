

import ListContainerView from '../view/list-container-view.js';
import FilmCardView from '../view/film-card-view.js';
import ShowMoreView from '../view/show-more-view.js';


import { render } from '../render.js';

export default class BoardPresenter {
    listComponent = new ListContainerView();

    init = (boardContainer) => {
        this.boardContainer = boardContainer;


        render(this.listComponent, this.boardContainer);



        for (let i = 0; i < 5; i++) {
            render(new FilmCardView(), this.listComponent.getElement());
        }

        render(new ShowMoreView(), this.boardContainer);
    };
}