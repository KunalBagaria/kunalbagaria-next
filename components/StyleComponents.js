import styles from '../styles/Home.module.scss'

export const Grid = ({ children, className } ) => (
    <div style={{ display: 'grid' }} className={className}>
        {children}
    </div>
)

export const Flex = ({ children, className } ) => (
    <div style={{ display: 'flex' }} className={className}>
        {children}
    </div>
)