/** @format */

import React from 'react'
import { Table } from 'antd'
import { getFund } from '../api/fund'

interface Istate {
  fundList: Array<object>
}

const columns = [
  {
    title: '基金名称',
    dataIndex: 'name',
  },
  {
    title: '基金代码',
    dataIndex: 'code',
  },
]

class FundTable extends React.Component<{}, Istate> {
  constructor(props: Readonly<{}>) {
    super(props)
    this.state = {
      fundList: [],
    }
  }
  componentDidMount(): void {
    getFund().then((res) => {
      console.log(res)
    })
    this.setState({
      fundList: [
        {
          key: 1,
          name: '招商白酒',
          code: '7328373',
        },
        {
          key: 2,
          name: '中证',
          code: '333322',
        },
      ],
    })
  }

  render(): JSX.Element {
    return (
      <div className="FundTable">
        <Table dataSource={this.state.fundList} columns={columns}></Table>
      </div>
    )
  }
}

export default FundTable
