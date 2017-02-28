Vagrant.configure("2") do |config|

    config.vm.provider :virtualbox do |v|
        v.name = "dev.react-test"
        v.customize [
            "modifyvm", :id,
            "--name", "dev.react-test",
            "--memory", 1024,
            "--natdnshostresolver1", "on",
            "--cpus", 2,
        ]
    end

    config.vm.box = "debian/jessie64"
    config.vm.network :private_network, ip: "192.168.33.201"
    config.ssh.forward_agent = true
    config.vm.provision :shell, path: "vagrant/provision.sh"
    config.vm.synced_folder "./", "/vagrant", type: "nfs"

end