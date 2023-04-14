import {CardsApiCaller} from 'src/api/cards/cards-api-caller';
import {times} from 'lodash';
import {generateString} from 'src/helpers/generator';
import {type CreateCards} from 'src/types/cards';

export function createCards({
  count,
  idList,
}: CreateCards): Promise<Array<Record<any, any>>> {
  return Promise.all(
    times(count, () => CardsApiCaller.createCard({cardName: generateString(5), idList}))
  );
}
