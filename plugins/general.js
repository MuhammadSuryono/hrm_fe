export default (context, inject) => {
  const substring = (text, limit = 500) => {
    if (text.length > limit) return `${text.substring(0,limit)}...`;
    else return text;
  }

  const queryUrl = () => {
    return new Proxy(new URLSearchParams(window.location.search), {
      get: (searchParams, prop) => searchParams.get(prop),
    });
  }

  const haveAccess = (scopes) => {
    if (!context.$auth.loggedIn) {
      return false;
    }
    let userScopes = context.$auth.user.scopes;
    let check = scopes.filter((scope) => userScopes.some(userScope => scope === userScope))
    return check.length > 0;
  }

  // Inject $hello(msg) in Vue, context and store.
  inject('substring', substring)
  inject('queryUrl', queryUrl)
  inject('haveAccess', haveAccess)
  // For Nuxt <= 2.12, also add 👇
  // context.$hello = hello
}
