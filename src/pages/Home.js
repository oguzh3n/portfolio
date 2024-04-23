// src/pages/home.js
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Shadow extends React.Component {
  render() {
    return (
      <center>
        <div className="a">
          <div className="absolute w-full h-[350px] bg-gradient-to-r from-blue-700 via-gray-600 to-[#004A9F] background-animate blur-3xl z-[-1] top-0 inset-x-1/2 -translate-x-1/2 rounded-2xl items-end opacity-20">
          </div>
        </div>
      </center>
    )
  }
}

class Section1 extends React.Component {
  render() {
    return (
    <h1 className="text-5xl sm:text-6xl text-center text-gray-200">
      {this.props.title}
      <br/>
      <span className="bg-gradient-to-r from-blue-700 via-gray-600 to-[#004A9F] text-transparent bg-clip-text textBackground-animate">
          {this.props.name}
      </span>
      .
    </h1>
    )
  }
}

class Section2 extends React.Component {
  render() {
    return (
    <div className="mt-28">
      <h1 className="font-semibold font-mono text-lg">
        {this.props.title}
      </h1>
    </div>
    )
  }
}
      
class Badge extends React.Component {
  render() {
    return (
      <center>
        <button class="px-7 sm:px-8 py-4 sm:py-5 bg-black/20 backdrop-blur rounded-full leading-none flex items-center mb-10 divide-x divide-gray-700">
          <span class="pr-3">
            {this.props.text}
          </span>
          <a href={this.props.link} class="pl-3 flex items-center justify-center text-center text-blue-200">
            Go &rarr;
          </a>
        </button>
      </center>
    )
  }
}

class Paragraph extends React.Component {
  render() {
    return (
      <span className="text-gray-400 text-sm md:text-md">
        {this.props.text}
      </span>
    )
  }
}

class Card extends React.Component {
  render() {
    return (
      <div className="mt-2 mb-2 bg-gray-900/30 rounded-xl backdrop-blur-md p-3 hover:bg-gray-800/30 transition duration-300 ml-2 mr-2 justify-between font-normal">
        <h1 className="text-xl open-sans flex justify-between">
         {this.props.title}
         <div className="">
          <i className={this.props.icon}>
          </i>
         </div>
        </h1>
      </div>
    )
  }
}

class CardGroup extends React.Component {
  render() {
    const cards = [
      { id: 1, title: "Typescript", icon: "fa fa-coins text-blue-300" },
      { id: 2, title: "Javascript", icon: "fab fa-js text-yellow-300" },
      { id: 3, title: "Java", icon: "fab fa-java text-orange-300" },
      { id: 4, title: "React", icon: "fab fa-react text-blue-300" },
      { id: 5, title: "Python", icon: "fab fa-python text-blue-400" },
      { id: 6, title: "PHP", icon: "fab fa-php text-cyan-300" },
      { id: 7, title: "Node.JS", icon: "fab fa-node text-green-300" },
      { id: 8, title: "Express.JS", icon: "fa fa-server text-gray-400" },
      { id: 9, title: "MongoDB", icon: "fa fa-leaf text-green-300" },
      { id: 10, title: "TailwindCSS", icon: "fa fa-leaf text-blue-300" },
      { id: 11, title: "Bootstrap", icon: "fab fa-bootstrap text-blue-400" },
      { id: 12, title: "CSS", icon: "fab fa-css3 text-cyan-200" },
      { id: 13, title: "HTML", icon: "fab fa-html5 text-red-300" },
      { id: 14, title: "Fontawesome", icon: "fa fa-code text-gray-500" },
      { id: 15, title: "Github", icon: "fab fa-github" },
      { id: 16, title: "Yarn", icon: "fab fa-yarn text-cyan-600" }
    ];

    const cardComponents = cards.map(card => (
      <Card key={card.id} title={card.title} description={card.description} icon={card.icon} />
    ));

    return (
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 items-center justify-center">
        {cardComponents}
      </div>
    );
  }
}

function getColorClass(language) {
  switch (language) {
    case 'HTML':
      return 'bg-red-500';
    case 'CSS':
      return 'bg-blue-500';
    case 'JavaScript':
      return 'bg-yellow-500';
    default:
      return 'bg-gray-500';
  }
}

class GitCard extends React.Component {
  render() {
    return (
      <div className="mt-2 mb-2 border-dashed border border-gray-800/30 rounded-xl backdrop-blur-md p-3 hover:bg-gray-800/30 transition duration-300">
        <a href={this.props.url} className="text-xl open-sans transition duration-300 flex items-center">
         <svg className="w-[19px] h-[19px] mr-1 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
         <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 19V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v13H7a2 2 0 0 0-2 2Zm0 0a2 2 0 0 0 2 2h12M9 3v14m7 0v4"/>
         </svg>
         {this.props.title}
         <div className="bg-blue-900/50 border border-blue-600 backdrop-blur-md rounded-xl inline-block text-sm px-1 items-center ml-1.5 text-blue-200">
          Public
         </div>
        </a>
        <br/>
        <span className="text-gray-400 text-sm md:text-md">
          {this.props.description}
         </span>
        <div className="bottom-5 mt-5 flex items-center text-sm">
          <div className={`w-[14px] h-[14px] rounded-full mr-1 ${getColorClass(this.props.language)}`}>
          </div>
          <div className="flex items-center">
            <span>
              {this.props.language}
            </span>
            <span className="flex items-center">
              <svg class="ml-5 mr-1 w-[15px] h-[15px] mb-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-width="2" d="M11.083 5.104c.35-.8 1.485-.8 1.834 0l1.752 4.022a1 1 0 0 0 .84.597l4.463.342c.9.069 1.255 1.2.556 1.771l-3.33 2.723a1 1 0 0 0-.337 1.016l1.03 4.119c.214.858-.71 1.552-1.474 1.106l-3.913-2.281a1 1 0 0 0-1.008 0L7.583 20.8c-.764.446-1.688-.248-1.474-1.106l1.03-4.119A1 1 0 0 0 6.8 14.56l-3.33-2.723c-.698-.571-.342-1.702.557-1.771l4.462-.342a1 1 0 0 0 .84-.597l1.753-4.022Z"/></svg>
              {this.props.stars}
            </span>
          </div>
        </div>
      </div>
    )
  }
}

class GithubRepos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      repositories: []
    };
  }

  componentDidMount() {
    fetch('https://api.github.com/users/oguzh3n/repos')
      .then(response => response.json())
      .then(data => {
        const repos = data.map(repo => ({
          id: repo.id,
          name: repo.name,
          description: repo.description,
          url: repo.html_url,
          language: repo.language,
          stars: repo.stargazers_count
        }));
        this.setState({ repositories: repos });
      })
      .catch(error => console.error('API fetch error:', error));
  }

  render() {
    return (
      <div className="repositories-list">
        {this.state.repositories.map(repo => (
          <GitCard key={repo.id} title={repo.name} description={repo.description} language={repo.language} stars={repo.stars} url={repo.url}/>
        ))}
      </div>
    );
  }
}

function markdownToHtml(markdownText) {
  markdownText = markdownText.replace(/^# (.*$)/gim, '<a1 class="text-white">$1</a1>');
  markdownText = markdownText.replace(/^## (.*$)/gim, '<a2 class="text-white">$1</a2>');
  markdownText = markdownText.replace(/^### (.*$)/gim, '<a3 class="text-white">$1</a3>');
  markdownText = markdownText.replace(/^#### (.*$)/gim, '<a4 class="text-white">$1</a4>');
  markdownText = markdownText.replace(/^##### (.*$)/gim, '<a5 class="text-white">$1</a5>');
  markdownText = markdownText.replace(/^###### (.*$)/gim, '<a6 class="text-white">$1</a6>');

  markdownText = markdownText.replace(/^---/gim, '<hr class="mt-3 mb-3 border border-gray-800">');
  
  markdownText = markdownText.replace(/\*\*(.*)\*\*/gim, '<strong>$1</strong>');
  markdownText = markdownText.replace(/\*(.*)\*/gim, '<em>$1</em>');
  markdownText = markdownText.replace(/`([^`]+)`/gim, '<pre class="mt-2 mb-2 inline-block p-0.5 bg-gray-900/50 border border-gray-800/50 rounded-md backdrop-blur-md text-xs sm:text-sm font-mono">$1</pre>');

  markdownText = markdownText.replace(/\[([^\]]+)\]\(([^)]+)\)/gim, '<a class="text-blue-400" href="$2">$1</a>');

  markdownText = markdownText.replace(/^\s*$/gim, '<p></p>');
  markdownText = markdownText.replace(/\n/gim, '</p><p>');

  return `<div>${markdownText}</div>`;
}

class Posts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      blogPosts: []
    };
  }

  componentDidMount() {
    const repoOwner = 'oguzh3n';
    const repoName = 'blogs';
    const directoryPath = 'posts';

    fetch(`https://api.github.com/repos/${repoOwner}/${repoName}/contents/${directoryPath}`)
      .then(response => response.json())
      .then(data => {
        const fetchPromises = data.map(file =>
          fetch(`https://raw.githubusercontent.com/${repoOwner}/${repoName}/main/${directoryPath}/${file.name}`)
            .then(response => response.text())
            .then(content => ({ 
              name: file.name
              .replace(/\.md$/, '')
              .replace(/[_-]/g, ' ')
              .replace(/^\w/, c => c.toUpperCase()),
            content 
            }))
        );

        Promise.all(fetchPromises)
          .then(posts => {
            this.setState({ blogPosts: posts });
          })
          .catch(error => console.error('API fetch error:', error));
      })
      .catch(error => console.error('API fetch error:', error));
  }

  render() {
    const { blogPosts } = this.state;
    return (
      <div>
        {blogPosts.map((post, index) => (
          <div key={index}>
            <BlogCard author="writed by ~ oguzh3n" title={post.name} description={<div dangerouslySetInnerHTML={{ __html: markdownToHtml(post.content) }}/>} />
          </div>
        ))}
      </div>
    );
  }
}

class BlogCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showDescription: false
    };
  }

  toggleDescription = () => {
    this.setState({ showDescription: !this.state.showDescription });
  }

  render() {
    const { title, description, author } = this.props;
    const { showDescription } = this.state;

    return (
      <div className="mt-2 mb-2 border-dashed border border-gray-800/30 rounded-xl backdrop-blur-md p-3 hover:bg-gray-800/30 transition duration-300">
        <a className="text-xl open-sans transition duration-300 flex items-center text-gray-400">
          <svg className="w-[19px] h-[19px] mr-1 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 19V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v13H7a2 2 0 0 0-2 2Zm0 0a2 2 0 0 0 2 2h12M9 3v14m7 0v4"/>
          </svg>
          {title}
        </a>
        <br/>
        <span id="seeAll" className="text-blue-400 text-md" onClick={this.toggleDescription}>
          {showDescription ? "Go Back" : "Read all"} &rarr;
        </span>
        <br className={showDescription ? "" : "hidden"}/>
        <br/>
        <span id="desc" className={showDescription ? "text-gray-400 text-sm md:text-md" : "text-gray-400 text-sm md:text-md hidden"}>
          {description}
        </span>
        <div className="bottom-5 mt-5 flex items-center text-sm text-gray-600">
          <span>
            {author}
          </span>
        </div>
      </div>
    );
  }
}

class Footer extends React.Component {
  render() {
    return (
      <div class="text-center mt-10 text-gray-600 flex items-center justify-center text-xs font-mono">
        {this.props.name} &copy; 2024 - 2025
      </div>
    )
  }
}

const Home = () => {
  return (
    <div className="p-7 mt-36">
      <Badge text="Source for beginners" link=""/>
      <Section1 title="Hello I'm" name="Oguzhan"/>
      <Shadow/>
      <Section2 title="Skills: Technologies"/>
      <Paragraph text="Learn about the technologies I use."/>
      <CardGroup/>
      <Section2 title="Open-Source: My Reposities"/>
      <Paragraph text="Learn about my github reposities."/>
      <GithubRepos/>
      <Section2 title="News: Blogs"/>
      <Paragraph text="Read and learn about my life."/>
      <Posts/>
      <Footer name="Oguzhan"/>
    </div>
  );
}

export default Home;