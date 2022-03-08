// index.js

import { GetServerSideProps } from "next";

export default function Index({ org }) {
  return (
    <div>
      <h1>{org.login} </h1>
      <h3>Twitter: {org.location}</h3>
      <p>
        Site:<a href={org.html_url}> {org.html_url}</a>
      </p>
      Bio: {org.bio}
    </div>
  );
}

export const getStaticProps: GetServerSideProps = async () => {
  const response = await fetch("https://api.github.com/users/joseRbrandao");

  const data = await response.json();

  return {
    props: {
      org: data,
    },
    revalidate: 10,
  };
};
