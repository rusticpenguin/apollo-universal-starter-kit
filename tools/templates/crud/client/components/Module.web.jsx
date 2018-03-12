import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { PageLayout } from '../../common/components/web';

import $Module$Filter from '../containers/$Module$Filter';
import $Module$List from '../containers/$Module$List';
import settings from '../../../../../../settings';

export default class $Module$ extends React.PureComponent {
  static propTypes = {
    title: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired
  };

  renderMetaData = title => (
    <Helmet
      title={`${settings.app.name} - ${title}`}
      meta={[
        {
          name: 'description',
          content: `${settings.app.name} - ${title} page`
        }
      ]}
    />
  );

  render() {
    const { title, link } = this.props;
    return (
      <PageLayout>
        {this.renderMetaData(title)}
        <h2>{title}</h2>
        <$Module$Filter />
        <$Module$List link={link} />
      </PageLayout>
    );
  }
}
