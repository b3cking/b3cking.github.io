This checklist contains rules for content creating:

- If you use `<iframe>` tag please always provide a title: `<iframe title="Innen indulunk"`
- If you use an url, an `<a>` tag, please check the following rules:
  - If it's an extarnal link, use nofollow, target=\_blank and aria-label attribute, for example: `[here](https://itmap.hu/utikalauz-mentorprogram/){:rel="nofollow"}{:target="_blank"}{:aria-label="Read it in ITMap also"}`
  - If it's an internal link, only the aria-label should be used, for example: `[multiple domains](https://danubius.io/about/){:aria-label="Check the about page"}`
- If you use an `<img>` tag, please provide an `alt` attribute. For eg.: `{% include image.html src="/images/mentoring1.jpg" alt="Team on the roof" %}`
