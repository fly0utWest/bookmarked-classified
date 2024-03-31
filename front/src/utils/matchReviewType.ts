export function matchReviewType(type: string): string {
  switch (type) {
    case 'BAD':
      return 'review-card_bad';
    case 'NEUTRAL':
      return 'review-card_neutral';
    case 'GOOD':
      return 'review-card_good';
    default:
      return '';
  }
}
