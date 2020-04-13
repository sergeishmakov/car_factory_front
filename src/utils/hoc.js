export function getHocDisplayName(name, WrappedComponent) {
  return `${name}(${getComponentDisplayName(WrappedComponent)})`;
}

export function getComponentDisplayName(WrappedComponent) {
  return WrappedComponent.displayName || WrappedComponent.name || 'Component';
}
