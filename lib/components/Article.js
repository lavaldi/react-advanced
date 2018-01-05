import React from 'react';
import PropTypes from 'prop-types';

const dateDisplay = (dateString) => new Date(dateString).toDateString();

const Article = (props, { store }) => {
  const { article } = props;
  const author = store.lookupAuthor(article.authorId);
  return (
    <div>
      <div>{article.title}</div>
      <div>{dateDisplay(article.date)}</div>
      <div>
        <a href={author.website}>{author.firstName} {author.lastName}</a>
      </div>
      <div>{article.body}</div>
    </div>
  );
};

Article.propTypes = {
  articles: PropTypes.shape({
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired
  })
};

Article.contextTypes = {
  store: PropTypes.object
};

export default Article;
