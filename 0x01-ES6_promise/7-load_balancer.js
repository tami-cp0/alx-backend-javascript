export default function loadBalancer(chinaDownload, USDownload) {
  return Promise
    .any([chinaDownload, USDownload])
    .then((value) => (value))
    .catch((error) => console.log(error));
}
