This project demonstrate 2 ways of doing code splitting without react router react.lazy() or suspense but using (1)HOC to wrapped a async component and load the page dynamically (2) set component in state and return <this.state.component /> in render(),do import and set default with route change. hint import return a promise ,so do setState() in .then()
