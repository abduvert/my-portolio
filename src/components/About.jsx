import '../App.css';

function AboutHome() {
  return (
    <div className='aboutMe code-window'>
      <div className="window-header">
        <div className="window-dots">
          <div className="window-dot dot-red"></div>
          <div className="window-dot dot-yellow"></div>
          <div className="window-dot dot-green"></div>
        </div>
        <span className="window-title">about_me.dart</span>
      </div>
      <div className="window-body">
        <p>
          <span className="code-comment">// Start of professional profile</span><br />
          <span className="code-keyword">final</span> String mission = <span className="code-string">"Building intuitive, user-centric mobile apps."</span>;<br /><br />

          <span className="code-keyword">void</span> <span className="code-func">introduceMyself</span>() &#123;<br />
          &nbsp;&nbsp;With over a year of hands-on experience in Flutter development, I specialize in crafting responsive UIs and integrating Firebase for real-time data.<br /><br />

          &nbsp;&nbsp;My goal? To create mobile experiences that exceed expectations by driving engagement and simplifying workflows. <span className="cursor-blink"></span><br />
          &#125;
        </p>
      </div>
    </div>
  );
}

export default AboutHome;
