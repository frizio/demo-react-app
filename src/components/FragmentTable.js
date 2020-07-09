import React from 'react'
import FragmentColumn from './FragmentColumns'

function FragmentTable() {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <FragmentColumn/>
          </tr>
        </thead>
      </table>
    </div>
  )
}

export default FragmentTable
