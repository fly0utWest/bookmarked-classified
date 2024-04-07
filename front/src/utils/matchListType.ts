import { User } from '../types';
import { ListPageType } from '../types/enums';

export function matchListType(
  listType: ListPageType,
  userData: User,
): number[] {
  switch (listType) {
    case ListPageType.Favourites:
      return userData?.favourites;
    case ListPageType.WatchLater:
      return userData?.watchLater;
    case ListPageType.Watched:
      return userData?.watched;
    default:
      return [];
  }
}
