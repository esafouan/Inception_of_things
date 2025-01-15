curl -sfL https://get.k3s.io | INSTALL_K3S_EXEC="--flannel-iface eth1" K3S_KUBECONFIG_MODE="644" sh -
sleep 10
sudo cat /var/lib/rancher/k3s/server/node-token > /vagrant/token
