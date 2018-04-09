import React from 'react'
import style from './style.scss'
import LoadMoreDecorator from '../Decorator/Add'
import { withRouter } from 'react-router'
import { API_TAG } from '@/constants'

const composeURL = (query, count) => {
  let URL = API_TAG.replace(/:tag/, query) + `&start=${count}`
  return URL
}

const LoadMore = (props) => {
  console.log(props)
  let count = props.contentData.payload && props.contentData.payload.count
  let { loadMoreTagData } = props
  let URL = composeURL(props.location.search.substring(3), count)
  return (
    <div className={style.loadMore}
      onClick={() => { loadMoreTagData(URL) }}>
      加载更多
    </div>
  )
}

export default withRouter(LoadMoreDecorator(LoadMore))