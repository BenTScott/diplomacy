#!/bin/bash

for ROUTE in $(cat ../../../routes.json | jq -r '.[].path')
do
    if [ ! -f ${ROUTE}.go ]
    then
        cat ../../templates/routes.tmpl | sed -e 's/ROUTEUPPER/'${ROUTE^}'/g' | sed -e 's/ROUTE/'${ROUTE}'/g' > ${ROUTE}.go
    fi

    if [ ! -d ${ROUTE} ]
    then
        mkdir ${ROUTE}
        cd ${ROUTE}
        cat ../../../templates/route-methods.tmpl | sed -e 's/ROUTEUPPER/'${ROUTE^}'/g' | sed -e 's/ROUTE/'${ROUTE}'/g' > ${ROUTE}.go
    fi
done