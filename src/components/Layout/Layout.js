import css from 'components/Layout/Layout.module.css';

export const Layout = ({ children }) => {
  return <main className={css.container}>{children}</main>;
};
