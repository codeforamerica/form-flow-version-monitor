import { Octokit } from "octokit";

const octokit = new Octokit();
// Add new apps here
const repos = [
  { name: 'form-flow-starter-app', search: 'def formFlowLibraryVersion' },
  { name: 'la-doc-uploader', search: 'def formFlowLibraryVersion' },
  { name: 'homeschool-pebt', search: 'def formFlowLibraryVersion' },
  { name: 'child-care-model', search: 'def formFlowLibraryVersion' },
];

repos.forEach(async (repo) => {
  const fromGitHub = await octokit.request(
    `GET /repos/codeforamerica/${repo.name}/contents/build.gradle`,
    {
      owner: 'codeforamerica',
      repo: repo.name,
      path: 'build.gradle'
    }
  );

  const decodedFile = atob(fromGitHub.data.content);
  const individualLines = decodedFile.split(/\r?\n|\r|\n/g);
  const versionLine = individualLines.filter(x => x.includes(repo.search)).toString();
  const versionNum = versionLine.match(/'([^']+)'/)[1];

  const contentEl = document.querySelector('#content');
  let newEl = document.createElement('li');
  newEl.className = 'card';
  newEl.innerHTML = `
    <h2>
      <a
        href="https://github.com/codeforamerica/${repo.name}/blob/main/build.gradle"
        target="_blank">
        ${repo.name}
      </a>
    </h2>
    <code>${versionNum}</code>
  `;
  contentEl.appendChild(newEl);
});
