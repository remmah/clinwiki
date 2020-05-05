/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: PublicUserFragment
// ====================================================

export interface PublicUserFragment_reviews {
  __typename: "Review";
  content: string;
  briefTitle: string;
  nctId: string;
}

export interface PublicUserFragment {
  __typename: "PublicUser";
  /**
   * Id
   */
  id: number;
  /**
   * First name
   */
  firstName: string | null;
  /**
   * Last name
   */
  lastName: string | null;
  /**
   * Number of reviews the user has done
   */
  reviewCount: number;
  reviews: PublicUserFragment_reviews[];
  pictureUrl: string | null;
  contributions: number;
}
