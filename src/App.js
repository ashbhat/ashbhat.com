import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Divider } from 'semantic-ui-react'
import { Grid, Image, Button, Input, Embed } from 'semantic-ui-react'
class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      currentBook:"Sapiens - A Brief History of Humankind - Yuval Harari",
      bookDescription: "This book does an incredible job of giving readers an intuition for the difference between objective realities and subjective realities / social constructions. If everyone read this book the world would be a better place. If you haven’t read in a while, read this first. It kickstarts your curiosity in random topics (here’s my theory as to why) and makes you realize how valuable reading can be. The book also gives you incredible frameworks to see the world. You won’t understand what I mean until you read the book but it literally changes the way you see the world (Here’s my longer theory that hopefully gives a better intuition for it).",
      readingBook : "Sapiens",
      readingBookLink : "https://www.amazon.com/Sapiens-Humankind-Yuval-Noah-Harari/dp/0062316095",
      podcasts : this.showPodcasts(0),
      contentClassName: "content",
      headingClassName: "heading",
      width: 0,
      height: 0
    }
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }
  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    if (window.innerWidth < 1000) {
      this.setState({ width: window.innerWidth, height: window.innerHeight, contentClassName: "contentSmall", headingClassName: "headingSmall" });
    }
    else{
      this.setState({ width: window.innerWidth, height: window.innerHeight, contentClassName: "content", headingClassName: "heading" });
    }

  }

  showBook(bookNumber){
    switch (bookNumber) {
      case 0:
        this.setState({currentBook : "Sapiens - A Brief History of Humankind - Yuval Harari", bookDescription: "This book does an incredible job of giving readers an intuition for the difference between objective realities and subjective realities / social constructions. If everyone read this book the world would be a better place. If you haven’t read in a while, read this first. It kickstarts your curiosity in random topics (here’s my theory as to why) and makes you realize how valuable reading can be. The book also gives you incredible frameworks to see the world. You won’t understand what I mean until you read the book but it literally changes the way you see the world (Here’s my longer theory that hopefully gives a better intuition for it).", readingBookLink: "https://www.amazon.com/Sapiens-Humankind-Yuval-Noah-Harari/dp/0062316095"})
        break;
      case 1:
        this.setState({readingBookLink: "https://www.amazon.com/Hatching-Twitter-Story-Friendship-Betrayal/dp/1591847087", currentBook : "Hatching Twitter", bookDescription: "Fuck man, I loved this book. It might be because of all the context I had around Twitter. From growing up in the Silicon Valley to watching the service take off, Twitter was one of those fairy tale stories that I watched happen right before my eyes. This was a book that I found myself immersed in reading a story that was so new and shocking to me yet so familiar. Definitely found myself getting incredible sentimental to the startup days of my youth. My favorite memory reading this book is getting hyped and sprinting on a treadmill while listening to Ev Williams worrying about Twitter staying up while Oprah sent out her first tweet."})
        break;
      case 2:
        this.setState({readingBookLink: "https://www.amazon.com/Born-Run-Hidden-Superathletes-Greatest/dp/0307279189", currentBook : "Born To Run: A Hidden Tribe, Superathletes, and the Greatest Race the World Has Never Seen - Christopher McDougall", bookDescription: "People who know me know that I love running. Up until reading this book, running was mostly a competitive sport for me. McDougall follows ultrarunners and a tribe of runners in Mexico in a book that’s both informative and tells a compelling story. This books my list in terms of the impact it’s had on me, it’s built my intuition for why running is important to me."})
        break;
      case 3:
        this.setState({readingBookLink:"https://www.amazon.com/Models-Attract-Women-Through-Honesty/dp/1463750358",currentBook : "Models - Attract Women through Honesty - Mark Manson", bookDescription: "I know, I know. A dating book with a cheesy headline. However, Models has an important place in my heart as a coming of age book. Relationships, both romantic and platonic, are incredibly important to me and this book builds the intuition for why you should be authentic and why you should be yourself. Sure, you’ve heard that phrase a million times, it’s not an intuitive truth - you don’t know why (Here’s my theory on why books are important to cement things you already know). In addition Manson is an incredible writer who also happens to keeps it real. I actually read this book at the beginning of college before I had built back up the endurance to read through an entire book. However, Mark Manson kept me turning pages and had me feeling incredibly sad when the book ended."})
        break;
      default:
        break;
    }
  }

  showCurrentBook(bookNumber){
    switch (bookNumber) {
      case 0:
        this.setState({readingBook: "Something1"})
        break;
      case 1:
        this.setState({readingBook: "Something2"})
        break;
      case 2:
        this.setState({readingBook: "Something3"})
        break;
      case 3:
        this.setState({readingBook: "Something4"})
        break;
      case 4:
        this.setState({readingBook: "Something5"})
        break;
      case 5:
        this.setState({readingBook: "Something6"})
        break;
      case 6:
        this.setState({readingBook: "Something7"})
        break;
      case 7:
        this.setState({readingBook: "Something8"})
        break;
      case 8:
        this.setState({readingBook: "Something9"})
        break;
      case 9:
        this.setState({readingBook: "Something10"})
        break;
      case 10:
        this.setState({readingBook: "Something11"})
        break;
      case 11:
        this.setState({readingBook: "Something12"})
        break;
      default:
        break;
      }
  }

  showPodcasts(type){
    if (type == 0) {
      return (
        <div>
        <h2>Entrepreneurship</h2>
        How I Built This : Reddit (<a href="https://www.breaker.audio/shows/how-i-built-this-with-guy-raz/episodes/live-episode-reddit-alexis-ohanian-steve-huffman/22438078">link</a>)
      <br/>
        Acquired : Instagram (<a href="https://www.breaker.audio/shows/acquired-a-podcast-about-technology-acquisitions-ipos/episodes/episode-2-instagram/11954283">link</a>)
<br/>
        Acquired : Skype (<a href="https://www.breaker.audio/shows/acquired-a-podcast-about-technology-acquisitions-ipos/episodes/episode-24-skype/11953794">link</a>)
<br/>
        Planet Money : The Business Genius Behind Get Out (<a href="https://www.breaker.audio/shows/planet-money/episodes/650-the-business-genius-behind-get-out/17431092">link</a>)
<br/>
        How I Built This : Chipotle (<a href="https://www.breaker.audio/shows/how-i-built-this-with-guy-raz/episodes/chipotle-steve-ells/24963912">link</a>)
<br/>
        How I Built This : Whole Foods (<a href="https://www.breaker.audio/shows/how-i-built-this-with-guy-raz/episodes/whole-foods-market-john-mackey/19117740">link</a>)
<br/>
        How I Built This : Airbnb (<a href="https://www.breaker.audio/shows/how-i-built-this-with-guy-raz/episodes/airbnb-joe-gebbia/22341232">link</a>)

        <h2>Philosophy</h2>
        Sam Harris: The Nature of Consciousness (<a href="https://www.breaker.audio/shows/waking-up-with-sam-harris/episodes/96-the-nature-of-consciousness/22721279">link</a>)
<br/>
        Sam Harris: From Cells to Cities (<a href="https://www.breaker.audio/shows/waking-up-with-sam-harris/episodes/86-from-cells-to-cities/20992492">link</a>)

        <h2>Metacognition / Curiosity</h2>
        Naval Ravikant on The Knowledge Project (<a href="https://www.breaker.audio/shows/the-knowledge-project-a-podcast-by-farnam-street/episodes/naval-ravikant-on-reading-happiness-systems-for-decision-making-habits-radical-honesty/14916785">link</a>)
<br/>
        The Art of Charm - Learn Better (<a href="https://www.breaker.audio/shows/the-art-of-charm-social-science-cognitive-psychology-confidence-relationship-advice-behavioral-economics/episodes/680-ulrich-boser-learn-better/29553360">link</a>)
<br/>
        Nourish Balance Thrive - Learning to Learn (<a href="https://www.breaker.audio/shows/nourish-balance-thrive/episodes/learning-to-learn-with-jonathan-levi/19890258">link</a>)

        <h2>Politics</h2>
        Trump’s Persuasion and Presidency (Scott Adams Interview) (<a href="https://www.breaker.audio/shows/the-rubin-report/episodes/trumps-persuasion-and-presidency-scott-adams-interview/28121871">link</a>)
<br/>
        NPR Politics (<a href="https://www.breaker.audio/shows/npr-politics-podcast/89413">link</a>)

        <h2>Psychology</h2>
        Invisbilia : Emotions (<a href="https://www.breaker.audio/shows/invisibilia/episodes/emotions/19670322">link</a>)
        <br/>
        Hidden Brain : Schadenfacebook (<a href="https://www.breaker.audio/shows/hidden-brain/episodes/ep-68-schadenfacebook/18163338">link</a>)
        <br/>
        Hidden Brain : Liar, Liar (<a href="https://www.breaker.audio/shows/hidden-brain/episodes/ep-66-liar-liar/17198876">link</a>)
        <br/>
        Hidden Brain : Getting Unstuck (<a href="https://www.breaker.audio/shows/hidden-brain/episodes/episode-56-getting-unstuck/8081236">link</a>)
        <br/>
        Hidden Brain : Switchtracking (<a href="https://www.breaker.audio/shows/hidden-brain/episodes/episode-1-switchtracking/606454">link</a>)
        <br/>
        Hidden Brain : Modern Love (<a href="https://www.breaker.audio/shows/hidden-brain/episodes/episode-9-aziz-ansari-on-modern-love/606467">link</a>)
      </div>
      )
    }
    else if (type == 1){
      return(
        <div>
          <h2>Entrepreneurship</h2>
          How I Built This : Reddit (<a href="https://www.breaker.audio/shows/how-i-built-this-with-guy-raz/episodes/live-episode-reddit-alexis-ohanian-steve-huffman/22438078">link</a>)
        <br/>
          Acquired : Instagram (<a href="https://www.breaker.audio/shows/acquired-a-podcast-about-technology-acquisitions-ipos/episodes/episode-2-instagram/11954283">link</a>)
  <br/>
          Acquired : Skype (<a href="https://www.breaker.audio/shows/acquired-a-podcast-about-technology-acquisitions-ipos/episodes/episode-24-skype/11953794">link</a>)
  <br/>
          Planet Money : The Business Genius Behind Get Out (<a href="https://www.breaker.audio/shows/planet-money/episodes/650-the-business-genius-behind-get-out/17431092">link</a>)
  <br/>
          How I Built This : Chipotle (<a href="https://www.breaker.audio/shows/how-i-built-this-with-guy-raz/episodes/chipotle-steve-ells/24963912">link</a>)
  <br/>
          How I Built This : Whole Foods (<a href="https://www.breaker.audio/shows/how-i-built-this-with-guy-raz/episodes/whole-foods-market-john-mackey/19117740">link</a>)
  <br/>
          How I Built This : Airbnb (<a href="https://www.breaker.audio/shows/how-i-built-this-with-guy-raz/episodes/airbnb-joe-gebbia/22341232">link</a>)

        </div>
      )
    }
    else if (type == 2){
      return(
        <div>
          <h2>Philosophy</h2>
          Sam Harris: The Nature of Consciousness (<a href="https://www.breaker.audio/shows/waking-up-with-sam-harris/episodes/96-the-nature-of-consciousness/22721279">link</a>)
  <br/>
          Sam Harris: From Cells to Cities (<a href="https://www.breaker.audio/shows/waking-up-with-sam-harris/episodes/86-from-cells-to-cities/20992492">link</a>)
        </div>
      )
    }
    else if (type == 3){
      return (      <div>
              <h2>Metacognition / Curiosity</h2>
              Naval Ravikant on The Knowledge Project (<a href="https://www.breaker.audio/shows/the-knowledge-project-a-podcast-by-farnam-street/episodes/naval-ravikant-on-reading-happiness-systems-for-decision-making-habits-radical-honesty/14916785">link</a>)
      <br/>
              The Art of Charm - Learn Better (<a href="https://www.breaker.audio/shows/the-art-of-charm-social-science-cognitive-psychology-confidence-relationship-advice-behavioral-economics/episodes/680-ulrich-boser-learn-better/29553360">link</a>)
      <br/>
              Nourish Balance Thrive - Learning to Learn (<a href="https://www.breaker.audio/shows/nourish-balance-thrive/episodes/learning-to-learn-with-jonathan-levi/19890258">link</a>)
            </div>)
    }
    else if (type == 4){
      return(      <div>
            <h2>Politics</h2>
            Trump’s Persuasion and Presidency (Scott Adams Interview) (<a href="https://www.breaker.audio/shows/the-rubin-report/episodes/trumps-persuasion-and-presidency-scott-adams-interview/28121871">link</a>)
      <br/>
            NPR Politics (<a href="https://www.breaker.audio/shows/npr-politics-podcast/89413">link</a>)
            </div>)
    }
    else if (type == 5){
      return(
        <div>
          <h2>Psychology</h2>
          Invisbilia : Emotions (<a href="https://www.breaker.audio/shows/invisibilia/episodes/emotions/19670322">link</a>)
          <br/>
          Hidden Brain : Schadenfacebook (<a href="https://www.breaker.audio/shows/hidden-brain/episodes/ep-68-schadenfacebook/18163338">link</a>)
          <br/>
          Hidden Brain : Liar, Liar (<a href="https://www.breaker.audio/shows/hidden-brain/episodes/ep-66-liar-liar/17198876">link</a>)
          <br/>
          Hidden Brain : Getting Unstuck (<a href="https://www.breaker.audio/shows/hidden-brain/episodes/episode-56-getting-unstuck/8081236">link</a>)
          <br/>
          Hidden Brain : Switchtracking (<a href="https://www.breaker.audio/shows/hidden-brain/episodes/episode-1-switchtracking/606454">link</a>)
          <br/>
          Hidden Brain : Modern Love (<a href="https://www.breaker.audio/shows/hidden-brain/episodes/episode-9-aziz-ansari-on-modern-love/606467">link</a>)
        </div>
      )
    }
  }

  render() {
    return (
      <div className="App">
        <div className="paper">


        <div className={this.state.headingClassName}>
          👨‍💻 Ash :
        </div>
        <div className={this.state.contentClassName}>
          • Here’s a <a href="https://pbs.twimg.com/profile_images/933855978860175360/x9efNbfX_400x400.jpg">picture of me</a>
          <br/>
          • Born and raised in San Jose, CA
          <br/>
          • I’m pretty inquisitive by nature, I have a broad set of interests
          <br/>
          • I left high school my junior year and spent my teenage years at software startups (<a href="https://www.linkedin.com/company/1118236/">Kiip</a> | <a href="https://www.linkedin.com/company/3842108/">1StudentBody</a> | <a href="https://www.linkedin.com/company/3842108/">Tetherball</a>)
          <br/>
          • I'm at UC Berkeley studying sociology, philosophy, and computer stuff.
          <br/>
          • If you're trying to contact me - <a href="mailto:me@ashbhat.com">email</a> | <a href="https://twitter.com/theashbhat">twitter</a> | <a href="https://messenger.com/theashbhat">messenger</a> | <a href="https://facebook.com/theashbhat">facebook</a>
          <br/>
          • I use <a href="https://facebook.com/theashbhat">Facebook</a> as a public timeline of what I'm working on
        <br/>
      </div>

        <br/>
          <br/>
            <br/>
              <br/>
        <Divider section className="divider"/>
        <div className={this.state.headingClassName}>
          📖 Books :
        </div>




        <div className={this.state.contentClassName}>
          If you’ve read any of my favorite books you should <a href="mailto:me@ashbhat.com">email me</a>. Half of the value I get out of reading a book comes in conversations after having read them.
          <br/>

          <h2>Favorites</h2>
          <Grid relaxed columns={4}>
            <Grid.Column>
              <Image className="bookImage" onMouseEnter={() => this.showBook(0)} src='https://images-na.ssl-images-amazon.com/images/I/51zJS6PmxbL._SX333_BO1,204,203,200_.jpg' />
            </Grid.Column>
            <Grid.Column>
              <Image className="bookImage" onMouseEnter={() => this.showBook(1)} src='https://images.gr-assets.com/books/1381332539l/18656827.jpg' />
            </Grid.Column>
            <Grid.Column>
              <Image className="bookImage" onMouseEnter={() => this.showBook(2)} src='https://images-na.ssl-images-amazon.com/images/I/516jKNI3yCL._SX324_BO1,204,203,200_.jpg' />
            </Grid.Column>
            <Grid.Column>
              <Image className="bookImage" onMouseEnter={() => this.showBook(3)} src='https://images.gr-assets.com/books/1505796543l/36265944.jpg' />
            </Grid.Column>
          </Grid>
          <br/>
          <h2>{this.state.currentBook} (<a href={this.state.readingBookLink}>link</a>)</h2>
          {this.state.bookDescription}
          <br/>
          {
            /**
            <h3>Suggest a book for me to read!</h3>

              <Input
                action={{ color: 'teal', labelPosition: 'right', icon: 'book', content: 'Suggest' }}
                defaultValue=''
                placeholder='book name'
                actionPosition='right'
              />
            **/
          }


{/**          <h3>Currently Reading - {this.state.readingBook} (<a href="">link</a>)</h3>

            <Grid relaxed columns={6}>
              <Grid.Column>
                <Image onMouseEnter={() => this.showCurrentBook(0)} src='https://images-na.ssl-images-amazon.com/images/I/51zJS6PmxbL._SX333_BO1,204,203,200_.jpg' />
              </Grid.Column>
              <Grid.Column>
                <Image onMouseEnter={() => this.showCurrentBook(1)} src='https://images.gr-assets.com/books/1381332539l/18656827.jpg' />
              </Grid.Column>
              <Grid.Column>
                <Image onMouseEnter={() => this.showCurrentBook(2)} src='https://images-na.ssl-images-amazon.com/images/I/516jKNI3yCL._SX324_BO1,204,203,200_.jpg' />
              </Grid.Column>
              <Grid.Column>
                <Image onMouseEnter={() => this.showCurrentBook(3)} src='https://images.gr-assets.com/books/1505796543l/36265944.jpg' />
              </Grid.Column>
              <Grid.Column>
                <Image onMouseEnter={() => this.showCurrentBook(4)} src='https://images-na.ssl-images-amazon.com/images/I/516jKNI3yCL._SX324_BO1,204,203,200_.jpg' />
              </Grid.Column>
              <Grid.Column>
                <Image onMouseEnter={() => this.showCurrentBook(5)} src='https://images.gr-assets.com/books/1505796543l/36265944.jpg' />
              </Grid.Column>
              <Grid.Column>
                <Image onMouseEnter={() => this.showCurrentBook(6)} src='https://images-na.ssl-images-amazon.com/images/I/51zJS6PmxbL._SX333_BO1,204,203,200_.jpg' />
              </Grid.Column>
              <Grid.Column>
                <Image onMouseEnter={() => this.showCurrentBook(7)} src='https://images.gr-assets.com/books/1381332539l/18656827.jpg' />
              </Grid.Column>
              <Grid.Column>
                <Image onMouseEnter={() => this.showCurrentBook(8)} src='https://images-na.ssl-images-amazon.com/images/I/516jKNI3yCL._SX324_BO1,204,203,200_.jpg' />
              </Grid.Column>
              <Grid.Column>
                <Image onMouseEnter={() => this.showCurrentBook(9)} src='https://images.gr-assets.com/books/1505796543l/36265944.jpg' />
              </Grid.Column>
              <Grid.Column>
                <Image onMouseEnter={() => this.showCurrentBook(10)} src='https://images-na.ssl-images-amazon.com/images/I/516jKNI3yCL._SX324_BO1,204,203,200_.jpg' />
              </Grid.Column>
              <Grid.Column>
                <Image onMouseEnter={() => this.showCurrentBook(11)} src='https://images.gr-assets.com/books/1505796543l/36265944.jpg' />
              </Grid.Column>
            </Grid>**/}
        </div>
        <br/>
          <Divider section className="divider"/>

        <div className={this.state.headingClassName}>
          🎙️ Podcasts :
        </div>
        <div className={this.state.contentClassName}>
          I listen to a fuck ton of podcasts - it’s such an easy way to consume some incredible information on a wide range of topics. Here are my favorites:

          <br/>
          <br/>

          <Button className="podcastButton" onClick={() => this.setState({podcasts : this.showPodcasts(0)})} style={{marginTop: "5px" , marginBottom : "5px"}}>All</Button>
          <Button className="podcastButton" onClick={() => this.setState({podcasts : this.showPodcasts(1)})} style={{marginBottom : "5px"}}>Entrepreneurship</Button>
          <Button className="podcastButton" onClick={() => this.setState({podcasts : this.showPodcasts(2)})} style={{marginBottom : "5px"}}>Philosophy</Button>
          <Button className="podcastButton" onClick={() => this.setState({podcasts : this.showPodcasts(3)})} style={{marginBottom : "5px"}}>Metacognition / Curiosity</Button>
          <Button className="podcastButton" onClick={() => this.setState({podcasts : this.showPodcasts(4)})}>Politics</Button>
          <Button className="podcastButton" onClick={() => this.setState({podcasts : this.showPodcasts(5)})} style={{marginBottom : "5px"}}>Psychology</Button>
          <br/>
          <br/>
          {this.state.podcasts}
          {
            /**


          <h3>Suggest a podcast for me to listen to!</h3>

            <Input
              action={{ color: 'teal', labelPosition: 'right', icon: 'microphone', content: 'Suggest' }}
              defaultValue=''
              placeholder='podcast name'
              actionPosition='right'
            />
            **/
          }
      </div>
        <br/>
          <Divider section className="divider"/>
          <div className={this.state.headingClassName}>
            🔗 Misc:
          </div>
          <br/>
          <div className={this.state.contentClassName}>
            <h1>Recorded Talks</h1>
              <Embed
                id='O6Xo21L0ybE'
                placeholder='https://i.ytimg.com/vi/14zHsv_TNMs/maxresdefault.jpg'
                source='youtube'
              />
            <h1>Coverage</h1>
            <h3>2018</h3>
            • <strong>CBS Evening News</strong>: Berkeley students battle fake news (<a href="https://www.cbsnews.com/news/berkeley-students-battle-fake-news-with-bot-buster/">link</a>)
            <br/>
            • <strong>Just Kidding News</strong>: Students Develop Way to Expose Bots on Twitter (<a href="https://www.youtube.com/watch?v=fgihJ8NCB8g">link</a>)
            <h3>2017</h3>
            • <strong>Adage Magazine</strong>: Creativity 50 2017 (<a href="http://adage.com/article/news/creativity-50-2017/311602/">link</a>)
            <br/>
            • <strong>UC Berkeley</strong>: Fed up, two UC Berkeley students launch tool to spot Twitter bots (<a href="http://news.berkeley.edu/story_jump/fed-up-two-uc-berkeley-students-launch-tool-to-spot-twitter-bots/">link</a>)
            <br/>
            • <strong>Wired</strong>: The College Kids Doing What Twitter Won't (<a href="https://www.wired.com/story/the-college-kids-doing-what-twitter-wont/">link</a>)
            <br/>
            • <strong>Tech News Weekly</strong> : You're not the bot of me! (<a href="https://twit.tv/shows/tech-news-weekly/episodes/5">link</a>)
            <br/>
            • <strong>Voice of America</strong>: Students Fight Digital Robots and Fake Accounts on Twitter (<a href="https://www.voanews.com/a/students-fight-digital-robots-fake-accounts-twitter/4113324.html">link</a>)
            <br/>
            • <strong>Sacramento Bee</strong>: Are you arguing with a person or a bot on social media? This site will tell you (<a href="http://www.sacbee.com/news/nation-world/national/article183456986.html">link</a>)
            <br/>
            • <strong>Mercury News</strong>: UC Berkeley students identify Twitter bots fueling the problem (<a href="https://www.mercurynews.com/2017/11/07/as-fake-news-flies-after-the-texas-shooting-uc-berkeley-students-identify-twitter-bots-fueling-the-problem/">link</a>)
            <br/>
            • <strong>Daily Cal</strong> : UC Berkeley Students launch Google Chrome extension to help identify Twitter bots (<a href="http://www.dailycal.org/2017/11/01/uc-berkeley-students-launch-google-chrome-extension-help-identify-twitter-bots/">link</a>)
            <br/>
            • <strong>University of California</strong> : Battling the bots Twitter Won't (<a href="https://www.universityofcalifornia.edu/news/battling-bots-twitter-wont">link</a>)
            <br/>
            • <strong>International Business Times</strong> : UC Berkeley Students Unveil Russian Facebook, Twitter Propaganda (<a href="http://www.ibtimes.com/uc-berkeley-students-unveil-russian-facebook-twitter-propaganda-chrome-extension-bot-2608560">link</a>)
            <br/>
            • <strong>Fox</strong> : UC Berkeley students fight fake news, take on bots (<a href="http://www.ktvu.com/news/uc-berkeley-students-fight-fake-news-take-on-bots">link</a>)
            <br/>
            • <strong>Mic</strong> : 2 College students built a tool to fight fake news on Facebook (<a href="https://mic.com/articles/177454/2-college-students-built-a-tool-to-fight-fake-news-on-facebook-using-artificial-intelligence#.szueArJyH">link</a>)
            <br/>
            • <strong>Fast Company</strong> : These Students Built The Anti-Bot Algorithm Twitter Desperately Needs (<a href="https://www.fastcodesign.com/90149576/these-students-built-the-anti-bot-algorithm-twitter-desperately-needs">link</a>)
            <br/>
            • <strong>CBS</strong> : Cal Students Develop Way To Expose Fake News Accounts, Bots On Twitter (<a href="http://sanfrancisco.cbslocal.com/2017/11/04/cal-students-expose-fake-news-accounts-bots-twitter/">link</a>)
            <br/>
            • <strong>ABC</strong> : Army of Twitter robots could unveil answers into Russian hacking (<a href="http://abc7news.com/technology/-army-of-twitter-robots-could-unveil-answers-into-russian-hacking/2601994/">link</a>)
            <br/>
            • <strong>Boing Boing</strong> : Botcheck.me: a plugin that predicts whether a Twitter user is a bot (<a href="https://boingboing.net/2017/10/31/botcheck-me.html">link</a>)
            <br/>
            • <strong>Washington Post</strong> : Trump slammed the Berkeley protesters. One responded by building a news app with his roommate. (<a href="https://www.washingtonpost.com/news/the-fix/wp/2017/02/04/trump-slammed-the-berkeley-protesters-one-responded-by-building-a-news-app-with-his-roommate/?utm_term=.7e835e31dcab">link</a>)
            <br/>
            • <strong>Mashable</strong> : Here's how to tell if you're yelling at a bot on Twitter (<a href="http://mashable.com/2017/11/02/botcheck-california-students-twitter-fake-accounts-bots/#rROnwFQBsOqA">link</a>)
            <br/>
            • <strong>Education Week</strong> : Bot or Not: Could a New Platform Help Schools Detect Fake Twitter Profiles? (<a href="http://blogs.edweek.org/edweek/DigitalEducation/2017/12/botcheck_google_chrome_fake_twitter_profiles.html">link</a>)
            <br/>
            • <strong>The Verge</strong> : Pocket Democracy (<a href="https://www.theverge.com/2017/2/14/14603226/political-apps-congress-votespotter-we-the-people-voter-countable">link</a>)
            <br/>
            • <strong>Bustle</strong> : 7 Useful Ways To Stay Informed About Everything That's Happening During Trump's Presidency (<a href="https://www.bustle.com/p/7-useful-ways-to-stay-informed-about-everything-thats-happening-during-trumps-presidency-36592">link</a>)
            <h3>2015</h3>
            • <strong>New York Times</strong> : The Hackathon Fast Track, From Campus to Silicon Valley (<a href="https://www.nytimes.com/2015/04/12/education/edlife/the-hackathon-fast-track-from-campus-to-silicon-valley.html">link</a>)
            <h3>2014</h3>
            • <strong>CNET</strong> : How a 16 year old won a scholarship to Apple's WWDC (<a href="https://www.cnet.com/news/how-a-16-year-old-won-a-scholarship-to-apples-wwdc/">link</a>)
            <h3>2013</h3>
            • <strong>Business Insider</strong> : A 16-Year-Old Is Becoming Mobile Ad Star By Telling Companies What They're Doing Wrong (<a href="http://www.businessinsider.com/ash-bhat-got-invited-to-wwdc-by-siri-bashing-2013-6">link</a>)
          </div>
            <Divider section className="divider"/>
          <br/>
        {/**
        <div className={this.state.headingClassName}>
          🍽️ Food & Cuisines :
        </div>
        <br/>
          <Divider section className="divider"/>
          <br/>
        **/}
        </div>

        {/**
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        **/}
        <center>🔥 Made on New Years 2018 by a bored & unfortunately sober Ash Bhat. Inspired by Google Docs. <a href="https://github.com/ashbhat/ashbhat.com">Source</a> 🔥 </center>
        <br/>
      </div>
    );
  }
}

export default App;
