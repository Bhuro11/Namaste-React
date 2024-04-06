# Namaste React 

# Parcel 
- Dev Build
- Local Server
- HMR = Hot Module Replacement
- File Watching Algoritham - Written in C++
- Caching - Faster Building
- Image Optimization
- Minification
- Bandling
- Compress
- Cinsistent Hashing
- Code Splitting
- Differential Bundling - support older browser
- Diagnostic
- Error Handling
- HTTPs
- Tree Shaking - remove unused code
- Different dev and production bundle

# Food Order App 
-> Header
    - Logo
    - Nav Items
-> Body
    - Search
    - Resturent Cards

# Import/Export
-> Two types pf import/export.

1. Named Import/Export
    export const var_name/component_name
    import {var_name/component_name} from 'path'

2. Default Import/Export
    export defult component
    import component from 'path'

# React Hooks
- Normal JS utilities function
- wrote by Meta developers
- Very important hooks is 
    1. useState() - it generate superpowerfull state variables in react
    2. useEffect()

# 2 types of routing
- Client side routing
- Server side routing

# Life Cycle of react
- 3 phase of life cycle
    1. Mounting
        - Constructor call (dummy data)
        - Render() call (dummy data)
        - HTML (dummy data)
        - ComponentDidMount
        - API call 
        - this.setState -> state variable is updateed

    2. Updating
        - Render() call (API data)
        - HTML (API data)
        - ComponentsDidUpdate

    3. Unmounting
        - data removed from the screen
        - ComponentWillUnmount

# Custom Hooks
- You create your own hook
- Must write statefully logical code, api calling, etc..
- File name start with use keyword
- eg, useOnlineStatus.js