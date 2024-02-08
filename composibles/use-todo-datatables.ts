import { todoApi } from '../boot';
import { useDatatable } from 'src/qnatk/composibles/use-datatable';
import { TransformedSortOption } from 'src/qnatk/QnatkListDTO';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function useEntityDataTable(
  baseModel: string,
  baseUrl = 'qnatk',
  transformSortBy: (sortBy: string) => string | TransformedSortOption = (
    sortBy
  ) => sortBy
) {
  return useDatatable(todoApi, baseModel, baseUrl, transformSortBy);
}
