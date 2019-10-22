import React, { useState } from 'react';
import Table from '../../elements/Table/Table';
import Config from './TableConfig';
import useToggle from '../../../../utils/useToggle';
import request from '../../../../utils/request';
import DeleteWarning from '../../elements/Modal/DeleteWarning';

const ArticlesTable = ({
  articleList, fetchArticles,
}) => {
  const [articleId, setArticleId] = useState(false);
  const [showDelWarn, setShowDelWarn] = useToggle(false);

  const delArticle = async () => {
    await request(`/api/articles/${articleId}`, 'delete');
    fetchArticles();
    setShowDelWarn();
    setArticleId(false);
  };

  const handleTableIcon = (e, row) => {
    const { dataset } = e.target;
    const {
      _id,
    } = row;
    if (dataset.name === 'del') {
      setArticleId(_id);
      setShowDelWarn();
    }
  };
  const Setting = Config();
  const { columns } = Setting;
  return (
    <>
      { articleList.isFetching ? <p>загрузка статей</p> : articleList.data.length
        ? (
          <Table data={articleList.data} handleIcon={handleTableIcon} columns={columns} keys="_id" />
        ) : <div>Статей нет</div>}
      <DeleteWarning confirmDel={delArticle} isOpen={showDelWarn} toggleOpen={setShowDelWarn} />
    </>
  );
};

export default React.memo(ArticlesTable);
