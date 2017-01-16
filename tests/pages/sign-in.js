import PageObject from '../page-object';

const {
  visitable,
  isHidden,
  text,
  clickable
} = PageObject;

const url = '/sign-in';

export default PageObject.create({
  url,
  visit: visitable(url),
  noErrors: isHidden('.error'),
  error: text('.error'),
  signInWithGithub: clickable('#github')
});
