import React from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import filterFactory from 'react-bootstrap-table2-filter';
import paginationFactory, { PaginationProvider, SizePerPageDropdownStandalone, PaginationListStandalone } from 'react-bootstrap-table2-paginator';

const Table = ({
  data, columns, handleIcon, keys, onTableChange, pagination, remote, disablePagination, defaultSorted,
}) => {
  const rowEvents = { onClick: handleIcon || function () { return false; } };
  const rowClasses = 'tableTD';
  const options = {
    custom: true,
    hidePageListOnlyOnePage: true,
    hideSizePerPage: false,
    alwaysShowAllBtns: false,
    totalSize: data && data.length,
    // sizePerPage: `${disablePagination ? data.length : 10}`,
    sizePerPageList: [{
      text: '10', value: 10,
    }, {
      text: '30', value: 30,
    }, {
      text: '50', value: 50,
    }, {
      text: 'Все', value: data.length,
    }],
  };

  return (
    <div>
      <PaginationProvider
        pagination={paginationFactory({ ...options, ...pagination })}
      >
        {(props) => {
          const {
            paginationProps,
            paginationTableProps,
          } = props;
          return (
            <div>
              {/* {disablePagination ? null
                : (
                  <PaginationBox>
                    <SizePerPageDropdownStandalone
                      {...paginationProps}
                    />
                    <PaginationListStandalone
                      {...paginationProps}
                    />
                  </PaginationBox>
                )
            } */}
              <BootstrapTable
                {...paginationTableProps}
                keyField={keys}
                remote={remote ? { pagination: true, filter: true, sort: true } : {}}
                data={data}
                columns={columns}
                filter={filterFactory()}
                bordered={false}
                rowEvents={rowEvents}
                rowClasses={rowClasses}
                onTableChange={onTableChange || function () {}}
                defaultSorted={defaultSorted}
              />
              {disablePagination ? null
                : (
                  <div className="paginationBox">
                    <SizePerPageDropdownStandalone
                      {...paginationProps}
                    />
                    <PaginationListStandalone
                      {...paginationProps}
                    />
                  </div>
                )
            }
            </div>
          );
        }}
      </PaginationProvider>
    </div>
  );
};
export default Table;
