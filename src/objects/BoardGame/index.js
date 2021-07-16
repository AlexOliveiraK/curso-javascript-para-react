import './style.css';
import CardFrontBack from '../../components/CardFrontBack';

function BoardGame(amountCards){
    const $hmtlCardFrontBack = CardFrontBack();
    const $hmtlContent = $hmtlCardFrontBack.repeat(amountCards);
    
    return /*html*/`
        <section class="board-game">
            ${$hmtlContent}
        </section>
    `;        	    	    	
}

export default BoardGame;