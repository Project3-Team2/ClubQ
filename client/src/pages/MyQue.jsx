import React from 'react';

import styles from './Home.module.scss';

export default () => {
 
  const que = useSelector(selectQue);
  const deleteQue = useDeleteQue();

  const handleDelete = (e, que) => {
    // Don't trigger parent's onClick
    e.stopPropagation();
    dispatch(deleteQue({ queId: que.queId, goHome: false }));
  };

  return (
    <div className={styles['my-que']}>
      <p>
        {que.length === 0
          ? " Don't have any active queues. Start by creating one..."
          : ' Would you like to do it today:'}
      </p>
      {que.map((que) => {
        const handler = () => history.push(`/que/${que.queId}`);
        return (
          <div
            key={que.queId}
            tabIndex="0"
            role="button"
            onKeyDown={handler}
            onClick={handler}
            className={styles['my-que-item']}
          >
            <div>{que.queName}</div>
            <IconButton onClick={(e) => handleDelete(e, que)}>
              <DeleteIcon />
            </IconButton>
          </div>
        );
      })}
    </div>
  );
    };