import React from 'react';

const ShowAllProfMobile = (props) => {

  let table = props.data.map(entry => (
    <table className="table table-striped table-hover table-bordered" key={entry.id}>
      <tbody>
        <tr>
          <th colSpan="2">{entry.id}</th>
        </tr>
        <tr>
          <td>Title</td>
          <td>{entry.title}</td>
        </tr>
        <tr>
          <td>Name</td>
          <td>{entry.name}</td>
        </tr>
        <tr>
          <td>Description</td>
          <td>{entry.description}</td>
        </tr>
        <tr>
          <td>Favorite</td>
          <td>{entry.favorite}</td>
        </tr>
        <tr>
          <td>Skills</td>
          <td>{entry.skills}</td>
        </tr>
        <tr>
          <td>Advice</td>
          <td>{entry.advice}</td>
        </tr>
        <tr>
          <td>Education</td>
          <td>{entry.education}</td>
        </tr>
        <tr>
          <td>Pay</td>
          <td>{entry.pay}</td>
        </tr>
        <tr>
          <td>Environment</td>
          <td>{entry.environment}</td>
        </tr>
        <tr>
          <td>Hashtag</td>
          <td>{entry.hashtag}</td>
        </tr>
        <tr>
          <td>Image URL</td>
          <td>{entry.image}</td>
        </tr>
      </tbody>
    </table>
  ))

  return (
    <div className="m-3 mt-2 col">
      {table}
    </div>
  );
}

export default ShowAllProfMobile
