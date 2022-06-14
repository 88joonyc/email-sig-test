import React, { useState } from 'react';
import Head from 'next/head';

export async function getStaticProps() {
  const data = await handler();

  return { props: { data } };
}

export default function Home({ data }) {
  const [facebook, setFacebook] = useState('');
  const [linkedin, setLinkedin] = useState('');
  const [twitter, setTwitter] = useState('');
  const [youtube, setYoutube] = useState('');
  const [instagram, setInstagram] = useState('');
  const [pinterest, setPinterest] = useState('');

  function handleSearch(e) {
    console.log(e.target.value);
  }

  return (
    <div className="w-full">
      <Head>
        <title>Trellis Email Generator</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="bg-[#2c3e50] w-full p-4 flex justify-between">
        <router-link className="" to="/" tabindex="-1">
          <svg
            width="138"
            height="39"
            viewBox="0 0 138 26"
            fill="white"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M12.2993 8.37108L10.1975 10.5797L5.47501 15.5424L2.491 18.6781L0 16.0605L2.98401 12.9247L0 9.78898L2.491 7.17131L5.47501 10.3071L7.57679 8.0984L12.2993 3.13575L15.2833 0L17.7743 2.61767L14.7903 5.75341L18.2933 9.40724L15.7763 12.0249L12.2993 8.37108ZM9.31616 0.00371239L6.82084 2.62588L8.9492 4.86243L11.4445 2.24026L9.31616 0.00371239ZM62.9497 12.0795C62.9497 9.02557 60.7181 7.11686 57.3709 7.11686H50.7801V21.2686H54.1274V17.1785V14.0155V10.2253H57.319C58.6164 10.2253 59.6024 10.9616 59.6024 12.1068C59.6024 13.2793 58.5904 14.0155 57.319 14.0155H55.3469V17.1785H56.9297L59.8359 21.2686H63.8578L60.4068 16.4968C61.9896 15.6243 62.9497 14.07 62.9497 12.0795ZM13.1515 23.6134L15.6468 20.9913L17.7752 23.2278L15.2799 25.85L13.1515 23.6134ZM69.0473 21.2686H79.2189V18.2147H72.3946V16.5241H72.3687V15.7607H78.3627V12.7613H72.3687V11.8341H72.3946V10.1708H79.2189V7.11686H69.0473V21.2686ZM22.1077 7.17122L21.3552 7.96198L16.6326 12.9246L12.2993 17.4783L8.82232 13.8245L6.33132 16.4421L9.80834 20.0959L6.82433 23.2317L9.31533 25.8494L10.0678 25.0859L14.7903 20.0959L19.1236 15.5423L22.1077 18.678L24.5987 16.0604L21.6406 12.9246L24.5987 9.78889L22.1077 7.17122ZM103.921 18.1601H110.538V21.2686H102.235V21.2412H100.574V7.11671H103.921V18.1601ZM119.438 7.11671H116.091V21.2412H119.438V7.11671ZM131.063 12.4612L132.931 12.9248C135.396 13.4974 137.005 14.5336 136.979 16.9604C136.979 19.7689 134.773 21.5413 131.4 21.5413C128.364 21.5413 125.64 20.0416 125.328 16.5514H128.676C128.883 17.8057 129.921 18.5419 131.504 18.5419C132.75 18.5419 133.398 18.0511 133.398 17.2876C133.398 16.824 133.113 16.3059 131.971 16.0878L129.766 15.5697C127.119 14.9698 125.873 13.661 125.873 11.4251C125.873 8.61655 128.053 6.81691 131.219 6.81691C133.398 6.81691 136.642 7.71673 137.005 11.5069H133.632C133.45 10.4435 132.827 9.70725 131.452 9.70725C130.31 9.70725 129.532 10.1981 129.532 11.1251C129.532 11.8886 130.051 12.2431 131.063 12.4612ZM85.0573 21.2686H88.3786L95.0212 21.2686V18.1601H88.3843L88.4045 7.11686H85.0573V21.2686ZM32.928 10.2525H34.6924H37.5985V21.2687H40.9199V10.2525H44.5526H45.5906V7.11671H32.928V10.2525Z"
            />
          </svg>
        </router-link>
        <input
          placeholder="Search name..."
          className="w-96 px-3 py-2"
          onChange={handleSearch}
        />
      </header>
      <div className="flex">
        <aside className="relative border-2 bg-white p-4">
          <div>
            <label Name="facebook">
              Facebook:
              <input
                for="facebook"
                placeholder="https://www.facebook.com/"
                className="px-2 border-2 rounded ml-2 my-1"
                onChange={(e) => setFacebook(e.target.value)}
              />
            </label>
          </div>
          <div>
            <label Name="linkedin">
              Linkedin:
              <input
                for="linkedin"
                placeholder="https://www.linkedin.com/"
                className="px-2 border-2 rounded ml-2 my-1"
                onChange={(e) => setLinkedin(e.target.value)}
              />
            </label>
          </div>
          <div>
            <label Name="twitter">
              twitter:
              <input
                for="twitter"
                placeholder="https://www.twitter.com/"
                className="px-2 border-2 rounded ml-2 my-1"
                onChange={(e) => setTwitter(e.target.value)}
              />
            </label>
          </div>
          <div>
            <label Name="youtube">
              youtube:
              <input
                for="youtube"
                placeholder="https://www.youtube.com/"
                className="px-2 border-2 rounded ml-2 my-1"
                onChange={(e) => setYoutube(e.target.value)}
              />
            </label>
          </div>
          <div>
            <label Name="instagram">
              instagram:
              <input
                for="instagram"
                placeholder="https://www.instagram.com/"
                className="px-2 border-2 rounded ml-2 my-1"
                onChange={(e) => setInstagram(e.target.value)}
              />
            </label>
          </div>
          <div>
            <label Name="pinterest">
              Pinterest:
              <input
                for="pinterest"
                placeholder="https://www.pinterest.com/"
                className="px-2 border-2 rounded ml-2 my-1"
                onChange={(e) => setPinterest(e.target.value)}
              />
            </label>
          </div>
        </aside>
        <main className="block lg:grid grid-cols-[auto_auto] xl:grid-cols-[1fr_1fr_1fr]">
          {data.map((element) => (
            <table className=" my-6">
              <tbody>
                <tr>
                  <td className="border-r-4 border-black w-[240px]">
                    {element['Email Signature']?.[0].url ? (
                      <img
                        src={element['Email Signature']?.[0].url}
                        alt=""
                        width="90%"
                        height={100}
                        className="mx-auto"
                      />
                    ) : element['Headshot']?.[0].url ? (
                      <img
                        src={element['Headshot']?.[0].url}
                        alt=""
                        width={1000}
                        height={1000}
                        className="rounded-full w-36 h-36 mx-auto"
                      />
                    ) : (
                      <svg
                        width="158"
                        height="39"
                        viewBox="0 0 138 26"
                        fill="black"
                        xmlns="http://www.w3.org/2000/svg"
                        className="mx-auto"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M12.2993 8.37108L10.1975 10.5797L5.47501 15.5424L2.491 18.6781L0 16.0605L2.98401 12.9247L0 9.78898L2.491 7.17131L5.47501 10.3071L7.57679 8.0984L12.2993 3.13575L15.2833 0L17.7743 2.61767L14.7903 5.75341L18.2933 9.40724L15.7763 12.0249L12.2993 8.37108ZM9.31616 0.00371239L6.82084 2.62588L8.9492 4.86243L11.4445 2.24026L9.31616 0.00371239ZM62.9497 12.0795C62.9497 9.02557 60.7181 7.11686 57.3709 7.11686H50.7801V21.2686H54.1274V17.1785V14.0155V10.2253H57.319C58.6164 10.2253 59.6024 10.9616 59.6024 12.1068C59.6024 13.2793 58.5904 14.0155 57.319 14.0155H55.3469V17.1785H56.9297L59.8359 21.2686H63.8578L60.4068 16.4968C61.9896 15.6243 62.9497 14.07 62.9497 12.0795ZM13.1515 23.6134L15.6468 20.9913L17.7752 23.2278L15.2799 25.85L13.1515 23.6134ZM69.0473 21.2686H79.2189V18.2147H72.3946V16.5241H72.3687V15.7607H78.3627V12.7613H72.3687V11.8341H72.3946V10.1708H79.2189V7.11686H69.0473V21.2686ZM22.1077 7.17122L21.3552 7.96198L16.6326 12.9246L12.2993 17.4783L8.82232 13.8245L6.33132 16.4421L9.80834 20.0959L6.82433 23.2317L9.31533 25.8494L10.0678 25.0859L14.7903 20.0959L19.1236 15.5423L22.1077 18.678L24.5987 16.0604L21.6406 12.9246L24.5987 9.78889L22.1077 7.17122ZM103.921 18.1601H110.538V21.2686H102.235V21.2412H100.574V7.11671H103.921V18.1601ZM119.438 7.11671H116.091V21.2412H119.438V7.11671ZM131.063 12.4612L132.931 12.9248C135.396 13.4974 137.005 14.5336 136.979 16.9604C136.979 19.7689 134.773 21.5413 131.4 21.5413C128.364 21.5413 125.64 20.0416 125.328 16.5514H128.676C128.883 17.8057 129.921 18.5419 131.504 18.5419C132.75 18.5419 133.398 18.0511 133.398 17.2876C133.398 16.824 133.113 16.3059 131.971 16.0878L129.766 15.5697C127.119 14.9698 125.873 13.661 125.873 11.4251C125.873 8.61655 128.053 6.81691 131.219 6.81691C133.398 6.81691 136.642 7.71673 137.005 11.5069H133.632C133.45 10.4435 132.827 9.70725 131.452 9.70725C130.31 9.70725 129.532 10.1981 129.532 11.1251C129.532 11.8886 130.051 12.2431 131.063 12.4612ZM85.0573 21.2686H88.3786L95.0212 21.2686V18.1601H88.3843L88.4045 7.11686H85.0573V21.2686ZM32.928 10.2525H34.6924H37.5985V21.2687H40.9199V10.2525H44.5526H45.5906V7.11671H32.928V10.2525Z"
                        />
                      </svg>
                    )}
                  </td>
                  <td className="w-6"></td>
                  <td>
                    <table className="w-[100%] font-[arial] text-[#333333]">
                      <tbody>
                        <tr>
                          <td className="text-md font-extrabold text-black">
                            {element.Name}
                          </td>
                        </tr>
                        <tr>
                          <td className="leading-[80%] pb-3 text-xs">
                            {element.Title}
                          </td>
                        </tr>
                        <tr>
                          <td className="text-xs">
                            P:&nbsp;{element['Office Phone']}
                          </td>
                        </tr>
                        <tr>
                          <td className="pb-1 text-xs">
                            E:&nbsp;{element['Company Email']}
                          </td>
                        </tr>
                        <tr>
                          <td className="font-semibold text-md">Trellis</td>
                        </tr>
                        <tr>
                          <td className="text-xs">350 Main Street Suite 620</td>
                        </tr>
                        <tr>
                          <td className="text-xs">Malden, MA 021478</td>
                        </tr>
                        <tr>
                          <td className="py-2 text-xs font-bold underline decoration-blue-500">
                            <a href="https://www.trellis.co">trellis.co</a>
                          </td>
                        </tr>
                        <tr>
                          <td className="flex pt-3">
                            {facebook && (
                              <a href={facebook}>
                                <img
                                  alt="Facebook icon"
                                  border="0"
                                  width="25"
                                  height="25"
                                  ng-src="https://www.mail-signatures.com/signature-generator/img/templates/top-security/fb.png"
                                  src="https://www.mail-signatures.com/signature-generator/img/templates/top-security/fb.png"
                                  className="rounded mx-[2px]"
                                />
                              </a>
                            )}
                            {linkedin && (
                              <a href={linkedin}>
                                <img
                                  alt="LinkedIn icon"
                                  border="0"
                                  width="25"
                                  height="25"
                                  ng-src="https://www.mail-signatures.com/signature-generator/img/templates/top-security/ln.png"
                                  src="https://www.mail-signatures.com/signature-generator/img/templates/top-security/ln.png"
                                  className="rounded mx-[2px]"
                                />
                              </a>
                            )}
                            {twitter && (
                              <a href={twitter} target="_blank">
                                <img
                                  alt="Twitter icon"
                                  border="0"
                                  width="25"
                                  height="25"
                                  ng-src="https://www.mail-signatures.com/signature-generator/img/templates/top-security/tt.png"
                                  src="https://www.mail-signatures.com/signature-generator/img/templates/top-security/tt.png"
                                  className="rounded mx-[2px]"
                                />
                              </a>
                            )}
                            {youtube && (
                              <a href={youtube} target="_blank">
                                <img
                                  alt="Youtube icon"
                                  border="0"
                                  width="25"
                                  height="25"
                                  ng-src="https://www.mail-signatures.com/signature-generator/img/templates/top-security/yt.png"
                                  src="https://www.mail-signatures.com/signature-generator/img/templates/top-security/yt.png"
                                  className="rounded mx-[2px]"
                                />
                              </a>
                            )}
                            {instagram && (
                              <a href={instagram} target="_blank">
                                <img
                                  alt="Instagram icon"
                                  border="0"
                                  width="25"
                                  height="25"
                                  ng-src="https://www.mail-signatures.com/signature-generator/img/templates/top-security/it.png"
                                  src="https://www.mail-signatures.com/signature-generator/img/templates/top-security/it.png"
                                  className="rounded mx-[2px]"
                                />
                              </a>
                            )}
                            {pinterest && (
                              <a href={pinterest} target="_blank">
                                <img
                                  alt="Pinterest icon"
                                  border="0"
                                  width="25"
                                  height="25"
                                  ng-src="https://www.mail-signatures.com/signature-generator/img/templates/top-security/pt.png"
                                  src="https://www.mail-signatures.com/signature-generator/img/templates/top-security/pt.png"
                                  className="rounded mx-[2px]"
                                />
                              </a>
                            )}
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
              </tbody>
            </table>
          ))}
        </main>
      </div>

      <footer></footer>
    </div>
  );
}

async function handler() {
  const data = [];
  var Airtable = require('airtable');
  Airtable.configure({
    endpointUrl: 'https://api.airtable.com',
    apiKey: process.env.AIRTABLE_API_KEY,
  });
  var base = Airtable.base(process.env.AIRTABLE_BASE_ID);

  let information = await base
    .table('Company')
    .select({
      fields: [
        'Name',
        'Title',
        'Company Email',
        'Office Phone',
        'Email Signature',
        'Headshot',
      ],
    })
    .all();

  information.forEach((element) => {
    data.push(element.fields);
  });

  return data;
}
