import React from 'react';
import { graphql } from 'gatsby';
import AptibleLayout from '../components/layouts/AptibleLayout';
import { Grid, Row } from '../components/grid/Grid';
import ContentfulRichText from '../components/contentful/ContentfulRichText';

export default ({ data }) => (
  <AptibleLayout>
    <Grid>
      <Row>
        <h1>{data.post.title}</h1>
        <ContentfulRichText json={data.post.body.json} />
      </Row>
    </Grid>
  </AptibleLayout>
);

export const query = graphql`
  query($slug: String!) {
    post: contentfulBlogPost(slug: { eq: $slug }) {
      id
      title
      body {
        json
      }
    }
  }
`;
