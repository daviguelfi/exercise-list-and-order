import React, { Component } from 'react';
import axios from 'axios';
import { Row, Col, Table } from 'reactstrap';
import latinize from 'latinize';

class List extends Component {
  constructor(props) {
    super(props)
    this.state = {
      listData: [],
      filtering: false,
      filterResult: [],
      filterValue: '',
    }
  }

  componentDidMount() {
    this.listGetData();
  }

  listGetData = async () => {
    const { listData } = this.state
    try {
      const responseList = await axios.get(`https://jsonplaceholder.typicode.com/todos`);

      this.setState({
        listData: responseList.data,
      })
    } catch (error) {
      console.error(error);
    }
  }

  sortUserId = () => {
    const { listData } = this.state
    let userId = listData
    const orderUserId = userId.sort(function (a, b) {
      if (a.userId > b.userId) { return 1 }
      if (a.userId < b.userId) { return -1 }
      return 0
    })
    this.setState({
      listData: orderUserId
    })
  }
  sortId = () => {
    const { listData } = this.state
    let idSort = listData
    const orderId = idSort.sort(function (a, b) {
      if (a.id > b.id) { return 1 }
      if (a.id < b.id) { return -1 }
      return 0
    })
    this.setState({
      listData: orderId
    })
  }
  sortTitle = () => {
    const { listData } = this.state
    let titleSort = listData
    const orderTitle = titleSort.sort(function (a, b) {
      if (a.title > b.title) { return 1 }
      if (a.title < b.title) { return -1 }
      return 0
    })
    this.setState({
      listData: orderTitle
    })
  }

  render() {
    const { listData } = this.state
    return (
      <Row>
        <Col xs="12">
          <div className="table-responsive">
            <Table responsive>
              <thead>
                <tr>
                  <th className="hand" style={{ padding: 10, width: 150 }}>
                    Concluidas
                  </th>
                  <th className="hand" style={{ padding: 10, cursor: "pointer", width: 150 }} onClick={() => this.sortUserId('userId')}>
                    Id do Usuário <i class="fas fa-sort"></i>
                  </th>
                  <th className="hand" style={{ padding: 10, cursor: "pointer", width: 150 }} onClick={() => this.sortId('id')} >
                    Id da tarefa <i class="fas fa-sort"></i>
                  </th>
                  <th className="hand" style={{ padding: 10, cursor: "pointer", width: 150 }} onClick={() => this.sortTitle('title')} >
                    Nome da tarefa <i class="fas fa-sort"></i>
                  </th>
                </tr>
              </thead>
              <tbody>
                {listData.map(list => {
                  return (
                    <tr key={list.id}>
                      <td style={{ padding: 10 }}>
                        <input type="checkbox"
                          checked={list.completed ? true : false}
                        />
                      </td>
                      <td style={{ padding: 10 }}>{list.userId} </td>
                      <td style={{ padding: 10 }}>{list.id} </td>
                      <td style={{ padding: 10 }}>{list.title} </td>
                    </tr>
                  )
                })}
              </tbody>
            </Table>
          </div>
        </Col>
      </Row>
    );
  }
}

export default List;
