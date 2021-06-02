import { Tag } from 'antd'
import React from 'react'
const { CheckableTag } = Tag

const tagsData = ['Movies', 'Books', 'Music', 'Sports']

class HotTags extends React.Component {
  state = {
    selectedTags: ['Books'],
  }

  handleChange(tag, checked) {
    const { selectedTags } = this.state
    const nextSelectedTags = checked ? [...selectedTags, tag] : selectedTags.filter(t => t !== tag)
    console.log('You are interested in: ', nextSelectedTags)
    this.setState({ selectedTags: nextSelectedTags })
  }

  render() {
    const { selectedTags } = this.state
    return (
      <>
        <span style={{ marginRight: 8 }}>Categories:</span>
        {tagsData.map(tag => (
          <CheckableTag
            key={tag}
            checked={selectedTags.indexOf(tag) > -1}
            onChange={checked => this.handleChange(tag, checked)}>
            {tag}
          </CheckableTag>
        ))}
      </>
    )
  }
}

export default HotTags