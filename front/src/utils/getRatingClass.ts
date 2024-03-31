export function getRatingClass(rating: number): string {
  if (rating >= 1 && rating < 5) {
    return 'film-page-heading__rating_bad';
  } else if (rating >= 5 && rating < 7) {
    return 'film-page-heading__rating_medium';
  } else return 'film-page-heading__rating_good';
}
